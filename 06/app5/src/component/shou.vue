<template>
  <ul id="shou" >
    <li v-for="i in arr">
      <a :href="'#'+i.path">
        {{i.title}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default ({
    props:['app_arr'],
    data() {
      return{
       arr:this.app_arr
      }
    }
  })
</script>

<style>
  #shou {
    overflow: hidden;
  }

  #shou li {
    float: left;
    line-height: 50px;
    padding: 0 53px;
    border-bottom: solid 1px #ccc;
  }
  #shou li:hover{
    border-bottom: solid 1px green;

  }
</style>
