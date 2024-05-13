<script setup lang="ts">

definePageMeta({
  layout: 'audio',
})

import {OpusDecoderWebWorker} from 'opus-decoder';
//import WebSocket from 'ws';


function start() {
  const socket = new WebSocket('ws://localhost:3000/api/audio');

  socket.binaryType = 'arraybuffer';
  socket.onopen = (event) => {
    console.log('Connected to audio websocket');
  };

  socket.onerror = (event) => {
    console.log(event);

    console.log('Error connecting to audio websocket');
  };

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const sampleRate = audioCtx.sampleRate;

  socket.onmessage = async (event) => {
    console.log('Received message: ' + event.data);
    const data = event.data;
    console.log('Received data: ' + data);


    const decoder = new OpusDecoderWebWorker({ channels: 2 });

    await decoder.ready;
    const decoded = await decoder.decodeFrame(data);
    console.log('Decoded data: ' + decoded);

    // play audio
    const audioCtx = new AudioContext();
    const source = audioCtx.createBufferSource();
    const buffer = audioCtx.createBuffer(2, decoded.samplesDecoded, sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      buffer.copyToChannel(decoded.channelData[channel], channel);
    }
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
  };

  socket.onclose = (event) => {
    console.log('Disconnected from audio websocket');
  };
}

</script>

<template>
  <h1>Test Audio</h1>
  <button @click="start">Start</button>
</template>