<script setup lang="ts">
const route = useRoute()

// TODO: Create Session

// Step 1. Check Session
const valid = useFetch("http://localhost:3000/api/session/valid", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    session: route.params.id,
  }),
})

</script>
<template>
  <h1>Test Connect</h1>
  <p>id: {{ route.params.id }}</p>
</template>