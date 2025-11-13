import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserInfos {
  userId: string
  username: string
  password: string
  token: string
  isLogin: boolean
}

export const useLoginStore = defineStore('login', () =>{
  
  const userInfos = ref<UserInfos>({
    userId: 'developer',
    username: 'developer',
    password: '111111',
    token: 'developer_token',
    isLogin: false,
  })
  const getUserInfos = computed(() => {
    return userInfos.value
  })
    const setUserInfos = (data:UserInfos) => {
      userInfos.value = data
    }

  return { userInfos, getUserInfos, setUserInfos }
})