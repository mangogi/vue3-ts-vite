<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from '../store/ index'

const loginStore = useLoginStore()

const router = useRouter()
const msg = ref('Hello World!')

const toLogin = () => {
  router.push({ name: 'login' })
}
const loginInfos = loginStore.userInfos
</script>

<template>
 
  <div class="card">
    <h1>WellCome,{{ loginInfos.username }}</h1>


    <button @click="toLogin">Login</button>
  </div>

 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
