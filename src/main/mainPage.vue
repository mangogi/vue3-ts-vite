<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const toLogin = () => {
  router.push({ name: 'login' })
}
</script>

<template>
  <h1>登录成功咯</h1>

</template>

<style scoped>

</style>
