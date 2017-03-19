<template>
  <div class="container">
      <v-start></v-start>
      <v-content></v-content>
      <v-footer ></v-footer> 
  </div>
</template>

<script>
  import Start from '@/components/start/start'
  import Content from '@/components/content/content'
  import Footer from '@/components/footer/footer'
  // import Swper from '@/components/test/text-swper'

  export default{
    name: 'app',
    data() {
      return {
        select: {}
      }
    },
    components: {
      'v-start': Start,
      'v-content': Content,
      'v-footer': Footer
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
.container {
  font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
