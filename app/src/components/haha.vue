<template>
  <div>
      237 屌丝寝室
        寝室长:屌丝军伟
  </div>
</template>
<script>
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
