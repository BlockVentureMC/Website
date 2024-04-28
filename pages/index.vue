<template>

  <h1 class="text-3xl font-bold mb-4 mt-5">Welcome to BlockVentureMC</h1>
  <p class="text-lg">BlockVenture is a Test Project lol :)</p>

  <div class="flex mt-5">
    <NuxtLink to="/audio" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
      <Headphones class="w-6 h-6 inline-block mr-2" />
      Audio Server
    </NuxtLink>
    <NuxtLink to="https://discord.gg/tAdf2saYup" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block ml-4">
      <img src="/assets/discord.svg" alt="Video" class="w-6 h-6 inline-block mr-2" />
      Discord
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { Headphones } from 'lucide-vue-next'
</script>