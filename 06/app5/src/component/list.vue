<template>
	<div>
		<div id="list">
			<div class="no1">
				<img :src="json.imgurl" style="width:80%;height:160px;margin:20px 30px;">
			</div>
			<div class="no2" style="margin:10px 40px;font-size:20px;">
				{{json.name}}
			</div>
			<div class="no3" style="margin:10px 40px;font-size:14px;color:#666;">
				{{json.content}}
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['no3_json'],
		data() {
			return {
				json: this.no3_json
			}
		}
	}
</script>

<style>
	#list>.no3 {
		line-height: 50px;
	}
  #list{
    margin:30px 40px;
  }
</style>
