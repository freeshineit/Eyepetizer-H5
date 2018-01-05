<template>
  <div class="container">
    <div class="content" ref='content'>
        <router-view></router-view> 
        <v-footer ></v-footer>  
    </div>
  </div>
</template>

<script>
  import Content from '@/components/content/content'
  import Footer from '@/components/footer/footer'

  export default{
    name: 'app',
    data() {
      return {
        select: {}
      }
    },
    mounted: function() {
        let _this = this
        setTimeout(() => {
            _this.$refs.content.style.left = '0px'
        }, 1500)
    },
    components: {
      'v-content': Content,
      'v-footer': Footer
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>

</style>
