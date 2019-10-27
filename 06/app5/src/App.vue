<template>
  <div id="app">
    <div style="min-height:50px;background:#eee;">
      <div style="width:180px;margin:0px auto;min-height:80px;">
          <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDA5ZGI4ZjgzODFlOTMwNTJlMzUzNzNkMTI2ZTMwMzYucG5n.png" style="width:100%;height:60px;padding:20px 0 ;">
      </div>
      <div style="width:66%;margin:0px auto 0;">
          <shou_s :app_arr="arr"></shou_s>
      </div>
    </div>
    <div style="min-height:500px;">
      <router-view></router-view>
    </div>
    <div style="min-height:240px;padding:0 10px;">
      <div style="width:80%;min-height:200px;margin:0 auto">
        <div style="width:30%;min-height:200px;float:left;">
          <div style="padding:30px 30px 20px">
            <p style="text-align:left;">品牌生鲜网站</p>
          </div>
          <div style="padding:0 30px">
            <p style="text-align:left;font-size:14px;line-height:25px;color:#666">地址：苏州市工业园区金鸡湖大道099号大厦</p>
            <p style="text-align:left;font-size:14px;line-height:25px;color:#666">电话：000-66668888</p>
            <p style="text-align:left;font-size:14px;line-height:25px;color:#666">手机：12345678911</p>
            <p style="text-align:left;font-size:14px;line-height:25px;color:#666">传真：000-66668888</p>
            <p style="text-align:left;font-size:14px;line-height:25px;color:#666">邮箱：website@qq.com</p>
          </div>
          <div style="min-height:40px;">
            <div style="width:20%;height:20px;overflow:hidden;position:relative;margin-left:40px;margin-top:15px;">
              <img src="http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png">
            </div>
          </div>
        </div>
        <div style="width:70%;min-height:240px;float:left;">
          <div>
            <p style="float:left;padding:80px 35px 10px;border-bottom:solid 1px #ccc;margin:0 6px;"><input type="text" placeholder="姓名:" style="outline:none;border:none;"></p>
            <p style="float:left;padding:80px 35px 10px;border-bottom:solid 1px #ccc;margin:0 6px;" ><input type="text" placeholder="电话:" style="outline:none;border:none;"></p>
            <p style="float:left;padding:80px 35px 10px;border-bottom:solid 1px #ccc;margin:0 6px;"><input type="text" placeholder="邮箱:" style="outline:none;border:none;"></p>
            <p style="border-bottom:solid 1px #ccc;margin:0 6px;padding:30px 30px;line-height:6s0px;"><input type="textarea" placeholder="内容:" style="outline:none;border:none;"></p>
            <p style="padding:30px 30px"><input type="submit" style="padding:0 20px;"></p>
          </div>
        </div>

      </div>
    </div>
    <div style="min-height:30px;background:#fefefe;">
        <div style="width:20%;margin:0 160px;line-height:30px;">
          <p style="font-size:14px;text-align:center;">版权所有 ©2017   苏ICP备1230012300号</p>
        </div>
    </div>
  </div>
</template>

<script>
 import shou_s from './component/shou.vue'
  export default {
    name: 'app',
    components: {
      shou_s
    },
    data() {
      return {
        arr: [
          {
            title: '首页',
            path: '/'
          },
          {
            title: '品牌介绍',
            path: '/no1'
          },
          {
            title: '产品中心',
            path: '/no2'
          },
          {
            title: '资讯动态',
            path: '/no3'
          },
          {
            title: '养殖基地',
            path: '/no4'
          },
          {
            title: '联系我们',
            path: '/no5'
          }
        ]
      }
    }
  }
</script>

<style>
  * {
  	margin: 0;
  	padding: 0;
  	list-style: none;
  }
</style>

<!--




 -->
