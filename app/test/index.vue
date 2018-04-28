<template>
  <div>
        <p>我是首页</p>
        <router-link to="/login">login</router-link>
        <router-link to="/register">register</router-link>
        <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
      return {
          
      }
  }
}
</script>

