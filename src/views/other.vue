<template>
  <h1>{{ count }}</h1>
  <el-buttom @click="plus">plus</el-buttom>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function plus() {
      count.value += 1
    }

    return {
      count,
      plus
    }
  }
}
</script>
