<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner clearfix">
        <img src="../assets/logo.png" class="l" alt="">
        <div class="head-nav r" >
          <ul class="nav-list clearfix">
            <li class="l" @click="logClick">登录</li>
            <li class="nav-pile l">丨</li>
            <li class="l" @click="regClick">注册</li>
            <li class="nav-pile l">丨</li>
            <li class="l" @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
    <div class="app-foot">
      <p>@ 2018 fishenal MIT</p>
    </div>
    <my-dialog :isShow = "isShowDialog" @on-close= "closeDialog">
      <ul>
        <li>我是对话内容</li>
        <li>我是对话内容</li>
        <li>我是对话内容</li>
        <li>我是对话内容</li>
      </ul>
    </my-dialog>
  </div>
</template>

<script>
import reset from "../../static/css/reset.css"
import dialog from "./dialog"
export default {
  name: 'App',
  components: {
    myDialog:dialog
  },
  data () {
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false
    }
  },
  methods: {
    aboutClick(){
      this.isShowAboutDialog  = true
    },
    logClick(){
      this.isShowLogDialog  = true
    },
    regClick(){
      this.isShowRegDialog  = true
    },
    closeDialog(){
      this.isShowDialog  = false
    }
  }
}
</script>

<style  lang="scss">
  body,html{
    width: 100%;
    height: 100%;
  }
  .app-head{
    background: #363636;
    color:#b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    .app-head-inner{
      width: 1200px;
      margin: 0 auto;
      img{
        width: 50px;
        margin-top: 20px;
      }
      .nav-list li{
        cursor: pointer;
      }
      .nav-pile{
        padding:0 10px;
      }
    }
  }
  .app-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    margin-top: 30px;
    clear: both;
  }
  .app-content{
    width: 1200px;
    margin: 0 auto;
  }
</style>



