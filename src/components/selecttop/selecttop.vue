<template>
  <div class="header">
      <div class="header-bg"></div>
      <div class="date-txt"></div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
    .header{
        width:100%;
        display: block;
        height: 50%;
        position: fixed; 
        &-bg{
            width: 100%;
            background-size: 100%;
            background-image: url(http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg);
            background-repeat: no-repeat;
            height: 100%;
            background-position: 50%
        }
    }

</style>
