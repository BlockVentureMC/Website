<template>
  <LayoutContainer :options="options">
    <h1>Test Audio</h1>
    <slot />
  </LayoutContainer>
</template>
<script setup lang="ts">
const options = [
  { text: 'Home', link: '/' },
  { text: 'Settings', link: '/audio/settings' },
  { text: 'Audio', link: '/audio' },
]
</script>