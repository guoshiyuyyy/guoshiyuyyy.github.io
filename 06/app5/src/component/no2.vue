<template>
	<div id="no2">
		<div style="overflow: hidden;line-height: 50px;">
			<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
				<el-breadcrumb-item :to="{ path: '/' }" style="color:#666;padding-left:60px;">
				  您当前的位置：首页</el-breadcrumb-item>
				<el-breadcrumb-item>产品中心</el-breadcrumb-item>
			</el-breadcrumb>
			<div style="float: right;">
				<span v-for="i in nav_arr" style="padding: 0 15px;" @click="btn(i)">{{i}}</span>
			</div>
		</div>
		<el-row v-loading="loading" style="width:80%;margin:20px auto">
			<el-col :span="8" v-for="i in list_arr">
				<list :no3_json="i" v-if="i.type == index"></list>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import list from './list.vue'
	export default {
		components: {
			list
		},
		methods: {
			btn(i) {

				this.loading = true
				setTimeout(() => {
					this.index = i
					this.loading = false
				}, 1000)

			}
		},
		data() {
			return {
				loading: false,
				nav_arr: ['冷冻生鲜', '加工产品', '农副产品'],
				index: '冷冻生鲜',
				list_arr: [{
						name: '火腿',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mOGI1NzYwMmRjMGI5NTk1ZTEzNDNlZjg5Yzg0MzYxMC00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '牛肩肉',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛百叶',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jMTMxNjViYjM3ZjA1ZDE2MTQ4MzUzZDc3MmI1M2RiZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '牛板筋',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
          {
          	name: '牛板筋',
          	content: "可以对产品做一个简单介绍...",
          	imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
          	type: '冷冻生鲜'
          },
          {
          	name: '牛板筋',
          	content: "可以对产品做一个简单介绍...",
          	imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
          	type: '冷冻生鲜'
          },
          {
          	name: '牛板筋',
          	content: "可以对产品做一个简单介绍...",
          	imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
          	type: '冷冻生鲜'
          },
          {
          	name: '牛板筋',
          	content: "可以对产品做一个简单介绍...",
          	imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
          	type: '冷冻生鲜'
          },
					{
						name: '牛棒骨',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MWVjZTczNGYxNWZmZWY1NjY0YmY5YTRjMDBkNTMwZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '加工产品'
					},

				]
			}
		}
	}
</script>

<style>
	#no2 .el-breadcrumb__inner {
		line-height: 50px;
	}
</style>
