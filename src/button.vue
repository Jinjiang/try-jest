<script>
import { ref } from 'vue'
export default {
  setup() {
    const msg = ref('Hello World!')
    return { msg }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>

<style>
  h1 { color: red }
</style>
