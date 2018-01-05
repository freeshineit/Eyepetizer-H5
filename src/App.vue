<template>
  <div class="container">
      <v-start></v-start>
      <router-view></router-view>
  </div>
</template>

<script>
  import Start from '@/components/start/start'
  export default{
    name: 'app',
    data () {
      return {
        select: {}
      }
    },
    components: {
      'v-start': Start
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
