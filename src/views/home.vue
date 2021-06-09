<template>
  <h1>{{ $store.state.count }}</h1>
  <el-button @click="$store.commit('increment')">add</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
</script>

<style lang="scss">
h1 {
  color: #ddd;
}
</style>
