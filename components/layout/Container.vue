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
  <div class="min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="overlay bg-opacity-75 p-8 rounded-lg">
        <LayoutBar :options="options" />
        <slot />
      </div>
    </div>
  </div>

  <div class="bottom">
    <ul class="flex mb-4 font-bold align-top justify-center space-x-4 mt-0">
      <li>Imprint</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
</template>

<style>
body {
  background-image: url('/public/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.overlay {
  /* 15171E and 75% opacity */
  background-color: rgba(21, 23, 30, 0.75);
  backdrop-filter: blur(4px);
  color: white;
  margin: 10px;
  width: calc(100% - 20px); /* Account for the margins */
  height: calc(100% - 20px); /* Account for the margins */
}

.bottom {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
}
</style>