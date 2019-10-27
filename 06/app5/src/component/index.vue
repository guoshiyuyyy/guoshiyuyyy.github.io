<template>
  <div>
    <div style="min-height:650px;">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="i in arr" :key="i">
          <img :src="i" style="width:100%;height:650px;">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="min-height:600px;margin:10px 0 80px">
      <div>
        <div style="float:left;width:30%;min-height:600px;">
          <div style="padding:10px 0 50px;">
            <p style="text-align:center;font-size:24px;color:#666;">产品种类</p>
            <p style="text-align:center;padding:10px 0 0;color:#999;font-size:14px;">Food types</p>
          </div>
          <div>
            <div class="pin">
              <p>冷冻生鲜</p>
            </div>
            <div class="xian">
              <p>加工产品</p>
            </div>
            <div class="xian">
              <p>农副产品</p>
            </div>
          </div>
        </div>
        <div style="float:left;width:60%;background:#fff;margin-left:10%;overflow;">
          <div v-for="i in arr2" class="rou">
            <img :src="i.url">
            <p style="font-size:18px;padding:10px 20px 0;">{{i.title}}</p>
            <p style="font-size:14px;padding: 5px 20px  25px; color:#666;">{{i.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="min-height: 400px;margin:10px 0">
      <div style="overflow:hidden;">
        <div style="width:50%;min-height:400px;float:left;background:#eee;">
          <div style="width:100%;margin:50px auto 30px;min-height:260px;">
            <div style="padding:50px 200px 20px;">
              <p style="font-size:24px;">品牌简介</p>
              <p style="font-size:16px;padding:10px 0 0;color:#ccc;">About us</p>
            </div>
            <div style="padding:10px 200px 0;color:#666;">
              <p style="line-height:30px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，
                还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站…
              </p>
            </div>
            <div style="padding:30px 210px 0;color:#666;">
              <p>MoRE <span style="color:#666;font-size:16px;">&gt;</span></p>
            </div>
          </div>
        </div>
        <div style="width:50%;min-height:400px;float:left;background:#fff;">
          <div style="width:90%;background:#eee;margin:0 auto;min-height:400px;">
            <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS81OWU3NmRmZWFlOTJhNGQ5ZmQ5NmY3NWQyNjQwZmUxYy5qcGc_p_p100_p_3D.jpg;"
              style="width:100%;height:400px">
          </div>
        </div>
      </div>
    </div>
    <div style="min-height:400px;margin:10px auto">
      <div style="width:80%;margin:0 auto;min-height:400px;">
        <div style="width:20%;min-height:50px;margin:0px 0px 0px;">
          <div style="padding:50px 0 20px; ">
            <p style="text-align:center;padding:10px 0;font-size:26px;">食品产业链</p>
            <p style="font-size:14px;text-align:center;color:#666;margin-right:30px;">Industry chain</p>
          </div>
        </div>
        <div style="min-height:200px;">
          <div style="width:85%;margin:0 auto;overflow:hidden;">
            <div style="width:15%;float:left;margin:0 8px 10px;" v-for="i in arr3">
              <img :src="i.url" style="width:70%;height:100px;padding:30px 20px 20px;">
              <div style="margin:10px 20px;background:#eee;padding:10px 20px;width:50%">
                <p style="text-align:center;font-size:16px;">{{i.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin:10px auto;min-height:400px;">
      <div style="width:80%;margin:0 auto;min-height:400px;">
        <div style="width:20%;min-height:50px;margin:0px 0px 0px;">
          <div style="padding:50px 0 20px;">
            <p style="text-align:center;padding:10px 0;font-size:26px;">制作方法</p>
            <p style="font-size:14px;text-align:center;color:#666;margin-right:30px;">Cooking</p>
          </div>
        </div>
        <div style="min-height:400px;">
          <div style="width:50%;min-height:400px;float:left;margin-left:60px;">
            <div>
              <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9hNDkzMzE1MDRkYzI5MWU4ZmE3NzAxYzA1M2Y4ZjhlMS5qcGc_p_p100_p_3D.jpg"
                style="width:100%;height:400px">
            </div>
          </div>
          <div style="width:40%;background:#eee;min-height:400px;float:left;">
            <div style="overflow:hidden;">
              <div style="width:100%;min-height:400px;float:left;">
                <div style="width:100%;margin:50px auto 30px;min-height:260px;">
                  <div style="padding:50px 100px 20px">
                    <p style="font-size:24px;">白切牛肉</p>
                    <p style="font-size:16px;padding:10px 0 0;color:#ccc;">原汁原味，酥烂香鲜</p>
                  </div>
                  <div style="padding:10px 110px 0;color:#666;">
                    <p style="line-height:20px;font-size:12px;">将牛腱子肉洗净，漂去血水，用沸水烫—次，放锅中，加清水淹没，置旺火上烧沸，撇去浮沫，加黄酒、八角、姜块(拍松)、葱段、精盐，盖严盖，移至小火上煮至酥烂，以筷子可以戳穿为好，端下锅晾凉，取出牛。将牛肉切成薄片，整齐地排在平盘中，将白酱油、味精、香油同放碗中调匀，浇在牛肉片上，撒上香菜段、红辣椒丝、蒜蓉，即可上桌。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="min-height:420px;margin:10px auto;">
      <div style="width:80%;margin:0 auto;min-height:400px;">
        <div style="width:20%;min-height:50px;margin:0px 0px 0px;">
          <div style="padding:50px 0 20px;">
            <p style="text-align:center;padding:10px 0;font-size:26px;"> 新闻资讯</p>
            <p style="font-size:14px;text-align:center;color:#666;margin-right:30px;">News</p>
          </div>
        </div>
        <div style="min-height:420px;">
          <div style="width:50%;min-height:400px;float:left;background:#fff;">
            <div>
              <div style="padding:10px 20px">
                <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtNjAweDM3MC5qcGc_p_p100_p_3D.jpg"
                  style="width:80%;height:260px;margin:20px 50px 0">
              </div>
              <div>
                <div style="padding:5px 10px 10px 80px;float:left;">
                  <p style="font-size:12px;color:#666">2017</p>
                  <p style="font-size:12px;color:#666">------</p>
                  <p style="font-size:12px;color:#666">06-01</p>
                </div>
                <div style="padding:0px 20px;">
                  <p style="font-size:20px;color:#000;padding:5px 0 0">全国粮改饲技术创新与推广...</p>
                  <p style="font-size:14px;line-height:25px;padding:3px 0 0;color:#666;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</p>
                </div>
              </div>
            </div>
          </div>
          <div style="width:50%;min-height:420px;float:left;">
            <div style="width:80%;min-height:100px;padding:10px 25px;margin:0 auto">
              <div class="fan">
                <div style="padding:30px 10px 10px 30px;float:left;">
                  <p style="font-size:12px;color:#666">2017</p>
                  <p style="font-size:12px;color:#666">------</p>
                  <p style="font-size:12px;color:#666">06-01</p>
                </div>
                <div style="padding:20px 40px;">
                  <p style="font-size:20px;color:#000;padding:5px 0 0">全国粮改饲技术创新与推广...</p>
                  <p style="font-size:12px;line-height:25px;padding:3px 0 0;color:#666;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</p>
                </div>
              </div>
              <div class="fan">
                <div style="padding:30px 10px 10px 30px;float:left;">
                  <p style="font-size:12px;color:#666">2017</p>
                  <p style="font-size:12px;color:#666">------</p>
                  <p style="font-size:12px;color:#666">06-01</p>
                </div>
                <div style="padding:20px 40px;">
                  <p style="font-size:20px;color:#000;padding:5px 0 0">全国粮改饲技术创新与推广...</p>
                  <p style="font-size:12px;line-height:25px;padding:3px 0 0;color:#666;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</p>
                </div>
              </div>
              <div class="fan">
                <div style="padding:30px 10px 10px 30px;float:left;">
                  <p style="font-size:12px;color:#666">2017</p>
                  <p style="font-size:12px;color:#666">------</p>
                  <p style="font-size:12px;color:#666">06-01</p>
                </div>
                <div style="padding:20px 40px;">
                  <p style="font-size:20px;color:#000;padding:5px 0 0">全国粮改饲技术创新与推广...</p>
                  <p style="font-size:12px;line-height:25px;padding:3px 0 0;color:#666;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="min-height:400px;margin:10px auto;">
      <div style="min-height:400px;">
        <div style="width:20%;min-height:50px;margin:0px 120px 0px;">
          <div style="padding:50px 0 20px">
            <p style="text-align:center;padding:10px 0;font-size:26px;"> 客户评价</p>
            <p style="font-size:14px;color:#666;text-align:center;margin-left:32px;">Customer comments</p>
          </div>
        </div>
        <div style="margin:20px 0px;width:100%;">
          <div style="overflow:hidden;width:80%;margin:0 auto;">
            <div v-for="i in arr4" style="float:left;margin:10px;">
              <div style="width:23%;float:left;min-height:200px;padding:0 40px;">
                <img :src="i.url" style="width:90%;height:120px;padding:40px 15px 0;">
              </div>
              <div style="background:#eee;width:100%;min-height:200px;margin:0 5px;">
                <p style="font-size:18px;padding:50px 30px 0;">{{i.title}}</p>
                <p style="color:#666;padding:10px 0px 0;">{{i.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="min-height:200px;margin:10px 0;padding:0 10px;">
      <div style="width:20%;min-height:50px;margin:0px 70px 0px;">
        <div style="padding:50px 0 20px; ">
          <p style="text-align:center;padding:10px 0;font-size:26px;">合作伙伴</p>
          <p style="font-size:14px;text-align:center;color:#666;margin-right:30px;">Partner</p>
        </div>
      </div>
      <div style="min-height:100px;padding:20px 0 50px;border-bottom: solid 1px #ccc;width:90%;margin:0 auto;">
        <div style="background:#gray;float:left;width:7%;margin-left:110px;" v-for="i in arr5">
          <img :src="i.url" style="height:100px;width:100%;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default ({
    data() {
      return {
        arr: [
          'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZWM1OTM5ZWUyNDMxNjg0MWRmMmJkOTM4MWJjN2IyYTEuanBn.jpg',
          'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9jMmFmMzc5ZGMwNmQwMTA0OTRmYmU1ZmZjNzA0NzhkMS5qcGc_p_p100_p_3D.jpg'
        ],
        arr2: [{
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS03MDB4NTI0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
            title: '火腿',
            name: '可以对产品做一个简单的介绍..'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
            title: '牛肩肉',
            name: '可以对产品做一个简单的介绍..'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jMTMxNjViYjM3ZjA1ZDE2MTQ4MzUzZDc3MmI1M2RiZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
            title: '牛百叶',
            name: '可以对产品做一个简单的介绍..'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
            title: '牛板筋',
            name: '可以对产品做一个简单的介绍..'
          },
        ],
        arr3: [{
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MTItMzAweDMwMC5wbmc_p_p100_p_3D.png',
            title: '农场养殖'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MTItMzAweDMwMC5wbmc_p_p100_p_3D.png',
            title: '饲料加工'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS82ZWU5NmE5NjJkZDQ5ZThiMGQ3NDlkNjM2ODdjYzAyNC0zMDB4MzAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
            title: '屠宰分割'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MTUtMzAweDMwMC5wbmc_p_p100_p_3D.png',
            title: '质量检验'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MS0zMDB4MzAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
            title: '加工包装'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MTQtMzAweDMwMC5wbmc_p_p100_p_3D.png',
            title: '物流配送'
          },
        ],
        arr4: [{
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvYThhOGZlNzU3YzRlOTlmYzgyMzJkMjA4N2MwZTc0ZGQucG5n.png',
            title: '肉质鲜嫩，口感很不错',
            content: '我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单。'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNmVlMDc4ZTZkNWM2ZjRkZGI3OGY4OTNkNTlmNzI0YWQucG5n.png',
            title: '肉质鲜嫩，口感很不错',
            content: '我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单。'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvODYxNWY0NjAzODhmMWUxYzdkNDUwOWFmNDk0M2I0ZTMucG5n.png',
            title: '肉质鲜嫩，口感很不错',
            content: '我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单。'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZmQwODk0MTQyZTczNDkzODA1ZTZmN2MwNWU5YjcwNzgucG5n.png',
            title: '肉质鲜嫩，口感很不错',
            content: '我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单。'
          }
        ],
        arr5: [{
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNGQ2MDZlYjQyMTQ2MDc3YzI5ZDMyMTQ1ZDU4NzJiYjgucG5n.png'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvOTE0ZjQ0NGM5MmQ0NjdhZDUxODQ2MTk2OTRiYWNmMjMucG5n.png'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzBjZDkxOTg3MzJmZGY4ZjNhMjQyZTA0OTM0YjBmM2QucG5n.png'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYjkyMzBiM2RmMTIxOTliNTRkNGJkNWRmNDkzNWE3ZTYucG5n.png'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzZlMDNhZWMzNmQ4ODBiM2VmOGM3MzhmMWVlNTA3MTYucG5n.png'
          },
          {
            url: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzZlMDNhZWMzNmQ4ODBiM2VmOGM3MzhmMWVlNTA3MTYucG5n.png'
          },

        ]
      }
    }
  })
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__container {
    min-height: 650px;
  }

  .xian p {
    text-align: center;
    padding: 10px 0;
    color: #666;
  }

  .pin p {
    text-align: center;
    padding: 10px 0;
    color: #000;
  }

  .xian p:hover {
    color: #000;
  }

  .pin p:hover {
    color: #666;
  }

  .rou {
    float: left;
    width: 45%;
    margin: 0 15px;
    border-bottom: solid 1px #ccc;
  }

  .rou img {
    width: 100%;
    height: 210px;
  }

  .rou:hover {
    background: #eee;
  }

  .fan {
    margin: 10px 0;
  }

  .fan:hover {
    background: #ccc;
  }
</style>
