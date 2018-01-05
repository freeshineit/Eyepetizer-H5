<template>
  <div class="container">
    <div class="content" ref='content'>
        <div class="containet_view">
        	<router-view></router-view> 
        </div>
        <v-footer ></v-footer>  
    </div>
  </div>
</template>

<script>
  import Content from '@/components/content/content'
  import Footer from '@/components/footer/footer'

  export default{
    name: 'app',
    data () {
      return {
        select: {}
      }
    },
    mounted: function () {
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

<style lang='less' scoped rel='stylesheet/less'>
	.containet {
		&_view{
			position: absolute;
			height: 100%;
			width: 100%;
		}
	}
</style>
