<template >
    <div class="videos-list-box" >
        <v-video v-for="item in videoList" :video='item' :key ='item.id'></v-video> 
    </div> 
</template>

<script>
    // import videodes from '@/components/videodes/videodes'
    import Video from '@/components/video/video'
    export default{
      props: {
        videoList: {
          type: Array,
          default () {
            return []
          }
        }
      },
      data () {
        return {
          show: false,
          selectedVideo: {}
        }
      },
      mounted: function () {
          console.log(this.videoList)
      },
      methods: {
      },
      components: {
        // 'v-videodes': videodes,
        'v-video': Video
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
    .videos-list{
        &-box{
            position: static;
            width: 100%;
            &-title{
                width: 100%;
                height: 50px;
                line-height: 50px;
                background: #FFF
            }
        }
    }
    .video-play-back{

    }

</style>
