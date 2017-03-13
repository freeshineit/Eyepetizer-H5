<template>
  <div id="app">
      <v-header ></v-header>
      <router-view :select="select"></router-view> 
      <v-footer ></v-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/header'
  import Footer from '@/components/footer/footer'

  const ERR_OK = 0
  export default{
    name: 'app',
    data() {
      return {
        select: {}
      }
    },
    created() {
      this.$http.get('/api/feed').then(res => {
        res = res.body
        if (res.errno === ERR_OK) {
          this.select = res.data
        }
      })
    },
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
#app {
  font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
