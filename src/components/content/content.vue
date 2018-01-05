<template>
    <div class="content" ref='content'>
        <router-view></router-view>   
    </div>
</template>
<script>
    import Footer from '@/components/footer/footer'

    export default{
      data () {
        return {
          show: true,
          select: {},
          Date: 0,
          nextPageUrl: ''
        }
      },
      mounted: function () {
        let _this = this
        setTimeout(() => {
          _this.$refs.content.style.left = '0px'
        }, 1500)
      },
      methods: {
      },
      components: {
        'v-footer': Footer
      }
    }
</script>
<style lang='less' rel='stylesheet/less'>
    .content{
        position: absolute;
        left: 100%;
        top: 0;
        width: 100%;
        height:100%;
        transition: all .3s ease;
    }

</style>
