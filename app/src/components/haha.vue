<template>
  <div>
      <h2>洪雨</h2>
      <h3>
        <img src="./hy.jpg" alt="">
      </h3>
  </div>
</template>
<script>
import rem from "./rem.js"
export default {
  created () {
      const url = "http://localhost:3000/msg"
      let socket = new WebSocket(url);
      socket.onopen = function()
        {
            // Web Socket 已连接上，使用 send() 方法发送数据
            socket.send("发送数据");
            alert("数据发送中...");
        };
        
        socket.onmessage = function (evt) 
        { 
            var received_msg = evt.data;
            alert("数据已接收...");
        };
  }
}
</script>
<style scoped>
h2{
  font: .24rem/.5rem  "微软雅黑"
}
h3 img{
  width: 100%;
}
</style>

