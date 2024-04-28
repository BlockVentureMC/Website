<template>
  <LayoutContainer :options="options">
    <slot />
  </LayoutContainer>
</template>
<script setup lang="ts">
const options = [
  { text: 'Home', link: '/' },
  { text: 'Audio', link: '/audio' },
  { text: 'Video', link: '/video' },
  { text: 'About', link: '/about' },
]
</script>