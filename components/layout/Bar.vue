<script lang="ts">
export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => []
    },
  },
})

</script>
<template>
  <ul class="top flex font-bold align-top justify-center space-x-4">
    <li v-for="option in options" :key="option.text">
      <NuxtLink :to="option.link">{{ option.text }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

.top {
  position: absolute;
  top: 5px;
  left: 0;

  right: 0;
  color: #EAE8FF;
}
</style>