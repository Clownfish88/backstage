<template>
  <div id="app">
    <!-- 链接导航 -->
    <div class="linkto">
      <router-link to="/">管理</router-link>
      <router-link to="/goods">结算</router-link>
    </div>
    <div class="box-terrou">
      <div class="box-title">
        <h1 class="box-title-zhu">商品管理</h1>
        <span class="box-title-fu">/供货商结算查询</span>
      </div>
      <div class="box-terback">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.linkto{
  margin: 20px;
  font-size: 14px;
}
.box-terrou{
    background-color: rgb(240, 238, 238);
    padding: 0 10px 10px;
  }
  .box-title{
    height: 40px;
    line-height: 40px;
  }
  .box-title-zhu{
    display: inline;
    font-size: 14px;
    font-weight: normal;
  }
  .box-terback{
    background-color: #fff;
    padding: 10px 10px 10px 10px;
  }
</style>
