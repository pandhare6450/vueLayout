<template>
  <div>
    <div v-if="isShow">
      <render/>
    </div>
    <div v-else>
      <editprofile/>
    </div>
  </div>
</template>
<script setup>
import { ref,onMounted ,provide,defineAsyncComponent} from 'vue'
const render = defineAsyncComponent(() => import('./render.vue'))
const editprofile = defineAsyncComponent(() => import('./editprofile.vue'))
import useUser from  '@pages/accounts/company/api.js'
const { getUser,user,updateUser} = useUser()


const isShow = ref(true)

onMounted(getUser)
const updateOnUser = data =>{
  updateUser(data)
  getUser(true,data)
  isShow.value = true
}
provide('user',user)
provide('updateOnUser',updateOnUser)


const isShowFun = sts => isShow.value = sts
provide('isShowFun',isShowFun)
</script>