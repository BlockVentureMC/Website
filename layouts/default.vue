<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="overlay bg-opacity-75 p-8 rounded-lg">
        <h1 class="text-3xl font-bold mb-4">Welcome to My Website</h1>
        <p class="text-lg">This is some sample text. You can replace it with your own content.</p>
        <slot />
      </div>
    </div>
  </div>

  <div class="bottom">
    <p>&copy; 2021 My Website</p>
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
  color: white;
  width: calc(100% - 10px); /* Account for the margins */
  height: calc(100% - 50px); /* Account for the margins */
  margin: 10px 10px 40px; /* Top, right, bottom, left */
}


.bottom {
  background-color: rgba(21, 23, 30, 0.75);
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 50%; /* 50% of the viewport width */
  text-align: center;
  color: white;

  /* lets round the corners */
  border-radius: 10px;
}
</style>