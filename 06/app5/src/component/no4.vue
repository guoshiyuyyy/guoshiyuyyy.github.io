<template>
  <div id="no4">
    <div style="overflow: hidden;line-height: 50px;padding:0 100px;">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
        <el-breadcrumb-item :to="{ path: '/' }" style="color:#666">
您当前的位置：首页</el-breadcrumb-item>
        <el-breadcrumb-item style="color:#000">养殖基地</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="min-height:400px;width:85%;margin:20px auto;">
      <div style="width:30%;min-height:60px;margin:10px auto;">
        <p style="padding:50px 0 10px; text-align:center;">养殖基地</p>
        <p style="padding:0px 0 10px; text-align:center;">BASE</p>
        <span style="width:10%;height:1px;border:solid 1px #000;display:inline-block;margin-left:175px;background: #ccc;"></span>
      </div>
      <div style="min-height:100px;overflow: hidden;">
          <div  v-for="i in arr" style="float:left;width:30%;margin:10px 12px;">
            <img :src="i.url" style="width:100%;height:220px;float:left;">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default({
     data(){
       return{
         arr:[
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNjY3ODY0YzNlMjNkNDliNWFiMjc5NzUyMGNhYjUxMjYtNDAweDMwMC5qcGc_p_p100_p_3D.jpg'},
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOGQ3MmM5MGNmMzAyZDZmMDZkMjc5NjFjYmIxMDljOTctNDAweDMwMC5qcGc_p_p100_p_3D.jpg'},
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMuanBnP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.jpg'},
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMuanBnP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.jpg'},
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMuanBnP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.jpg'},
           {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMuanBnP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.jpg'},
         ]
       }
     }
  })
</script>

<style>
  #no4 .el-breadcrumb__inner {
  	line-height: 50px;
  }
</style>


<!--




 -->
