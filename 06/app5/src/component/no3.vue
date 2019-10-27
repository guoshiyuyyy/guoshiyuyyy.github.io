<template>
  <div id="no4">
      <div style="margin:10px;min-height:50px;">
        <div style="overflow: hidden;line-height: 50px;padding:0 100px;float:left;">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
            <el-breadcrumb-item :to="{ path: '/' }" style="color:#666">
              您当前的位置：首页</el-breadcrumb-item>
            <el-breadcrumb-item style="color:#000">资讯动态</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div style="float:right;width:12%;min-height:50px;margin:10px 20px;">
          <span v-for="i in nav_arr" style="padding: 0 10px;line-height:50px;"  @click="btn(i)">{{i}}</span>
        </div>
      </div>
      <div style="margin:20px auto;min-height:600px;padding:0 30px;">
        <div style="width:80%;margin:0px auto;min-height:160px;border-bottom:solid 1px #ccc;" v-for="i in arr">
          <div style="width:70%;float:left;min-height:100px;" >
            <div style="min-height:100px;">
              <div>
                <p style="padding:50px 20px 10px;">{{i.title}}</p>
              </div>
              <div>
                <p style="padding:10px 20px 10px;color:#9">{{i.content}}</p>
              </div>
            </div>
          </div>
          <div style="width:30%;float:left;min-height:100px;">
              <img :src="i.url" style="width:50%;height:120px;margin:20px  0 0 60px">
          </div>
        </div>
      </div>
   </div>
</template>

<script>
  import di_s from './di.vue'
  export default({
    methods: {
    	btn(i) {
    		setTimeout(() => {
    			this.index = i
    		}, 1000)
    	}
     },
    data(){
      return{
        nav_arr: ['公司新闻', '行业资讯'],
        index:'公司新闻',
        arr:[
          {
            url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
            title:'保质保鲜',
            content:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...',
            type:'公司新闻'
          },
          {
            url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
            title:'物美价廉',
            content:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...',
            type:'公司新闻'
          },
          {
            url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
            title:'火腿很有嚼劲',
            content:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...'
          },
          {
            url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
            title:'内质鲜嫩，口感非常好',
            content:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...'
          },
          {
            url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
            title:'新疆畜牧业加强推广“四良一规范”',
            content:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...'
          },

        ]
      }
    }
  })
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
