<template>
  <div id="no1">
    <div style="margin:10px;min-height:50px;">
      <div style="overflow: hidden;line-height: 50px;padding:0 100px;float:left;">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
          <el-breadcrumb-item :to="{ path: '/' }" style="color:#666;padding-left:60px;">
            您当前的位置：首页</el-breadcrumb-item>
          <el-breadcrumb-item style="color:#000">品牌介绍</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div style="float:right;width:23%;min-height:50px;margin:10px 20px;">
        <ul class="wen">
          <li>品牌简介</li>
          <li>合作伙伴</li>
          <li>人才招聘</li>
        </ul>
      </div>
    </div>
    <div style="min-height:300px;margin:20px 0;">
      <div style="width:40%;margin:0 auto;min-height:100px;">
        <div>
          <p style="text-align:center;padding:50px 0 20px;font-size:20px;">品牌简介</p>
        </div>
        <div>
          <p style="text-align:center;font-size:14px;color:#666">ABOUT</p>
        </div>
        <div style="width:10%;height:1px;display:inline-block;background:#666;margin-left:275px;"></div>
      </div>
      <div style="width:78%;margin:20px auto;padding:30px 0 80px;">
        <p style="line-height:30px;font-size:14px;column-rule: #666;">
          我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。
          我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…
        </p>
      </div>
    </div>
    <div style="min-height:300px;margin:10px auto;">
      <div style="width:40%;margin:0 auto;min-height:100px;">
        <div>
          <p style="text-align:center;padding:50px 0 20px;font-size:20px;">合作伙伴</p>
        </div>
        <div>
          <p style="text-align:center;font-size:14px;color:#666">PARTNER</p>
        </div>
        <div style="width:10%;height:1px;display:inline-block;background:#666;margin-left:275px;"></div>
      </div>
      <div style="width:80%;margin:30px auto;min-height:80px;">
        <div style="width:10%;float:left;height:80px;margin:0 40px;" v-for="i in arr">
          <img :src="i.url" style="width:90%;height:80px;">
        </div>
      </div>
    </div>
    <div style="min-height:400px;margin:20px auto;">
      <div style="width:40%;margin:0 auto;min-height:100px;">
        <div>
          <p style="text-align:center;padding:50px 0 20px;font-size:20px;">人才招聘</p>
        </div>
        <div>
          <p style="text-align:center;font-size:14px;color:#666">PARTNER</p>
        </div>
        <div style="width:10%;height:1px;display:inline-block;background:#666;margin-left:275px;"></div>
      </div>
      <div style="width:80%;margin:30px auto;min-height:400px;">
        <div style="width:100%;min-height:400px;overflow:hidden;">
          <div style="float:left;width:50%;min-height:400px;">
              <h3 style="margin:60px 30px 20px;">应聘岗位：</h3>
              <div style="margin:10px 30px 20px;">
                <h4>一、资格要求</h4>
                <p style="line-height:30px;font-size: 14px;color:#666;">1.道德品质良好；</p>
                <p style="line-height:30px;font-size: 14px;color:#666;">2.身体健康；</p>
                <p style="line-height:30px;font-size: 14px;color:#666;">3.成绩优良，研究生须通过国家英语六级考试，本科生通过国家英语四级考试。</p>
              </div>
              <div style="margin:20px 30px 10px;">
               <h4> 二、招聘安排</h4>
               <p style="line-height:30px;font-size: 14px;color:#666;">1.即日起接收简历投递，截止日期2016年12月31日；</p>
               <p style="line-height:30px;font-size: 14px;color:#666;">2.面试时间另行通知（具体时间以短信形式通知）。</p>
              </div>
              <div style="margin:20px 30px 10px;">
                <h4>三、应聘方式</h4>
                <p style="line-height:30px;font-size: 14px;color:#666;">1.登陆企业网站（www.xxx.com.cn），按要求成功投递电子报名表及登记表视为应聘有效，不接收纸质简历应聘；</p>
                <p style="line-height:30px;font-size: 14px;color:#666;">2.应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：邮箱：123@163.com。</p>
                <p style="line-height:30px;font-size: 14px;color:#666;"> 3.人事处联系电话：0000-8888</p>
              </div>
          </div>
          <div style="float:left;width:50%;min-height:500px;">
              <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNTNiMTAxY2U5MTA0Yjc3YzJjYmQ1NmZkYWI0MGI1OTUtNDQweDUxNi5wbmc_p_p100_p_3D.png" style="width:70%;height:500px;margin:10px 100px 0;">
          </div>
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
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzBjZDkxOTg3MzJmZGY4ZjNhMjQyZTA0OTM0YjBmM2QtMTUweDEwNi5wbmc_p_p100_p_3D.png'},
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvOTE0ZjQ0NGM5MmQ0NjdhZDUxODQ2MTk2OTRiYWNmMjMucG5n.png'},
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNGQ2MDZlYjQyMTQ2MDc3YzI5ZDMyMTQ1ZDU4NzJiYjgucG5n.png'},
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYjkyMzBiM2RmMTIxOTliNTRkNGJkNWRmNDkzNWE3ZTYucG5n.png'},
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzZlMDNhZWMzNmQ4ODBiM2VmOGM3MzhmMWVlNTA3MTYucG5n.png'},
          {url:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZGI1OWE2NTUzYzQyYzI3ZTE3MDllYjY0OTg2NGE1ZWIucG5n.png'}
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

  #no1 .el-breadcrumb__inner {
    line-height: 50px;
  }

  #no1 .wen {
    overflow: hidden;
  }

  #no1 .wen li {
    float: left;
    padding: 0 20px;
    line-height: 50px;
    text-align: center;
  }

  #no1 .wen li:hover {
    border-bottom: solid 1px #ccc;
  }
</style>

<!--







 -->
