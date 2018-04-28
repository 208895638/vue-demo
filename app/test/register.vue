<template>
  <div>
      <p>
          请输入用户名
          <input type="text" name="username" placeholder="用户名" v-model="username">
      </p>
      <p>
          请输入密码
          <input type="password" name="password" v-model="password">
      </p>
    <h2 @click="postMessage">
        登录
    </h2>
  </div>
</template>
<script>
import res from "vue-resource"
export default {
  data () {
      return {
          username:"",
          password:""
      }
  },
  methods: {
      postMessage(){
          this.$http.get("/login",{
              username,
              password
          }).then(function(res){
              console.log(res);
          })
      }
  }
}
</script>

