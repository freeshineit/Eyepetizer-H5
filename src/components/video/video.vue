<template >
    <div class="videos-list-box-con video" @click='spread(video ,$event)' :id="video.id" :style="{backgroundImage: 'url(\'' + video.coverForFeed + '\')'}">
        <div class="video-cover">
            <div class="video-title">{{video.title}}</div>
            <div class="video-meta">#{{video.category}}&nbsp;&nbsp;/&nbsp;&nbsp;{{Math.round(video.duration / 60)}}' {{(video.duration % 60)}}"</div>
        </div>
    </div>
</template>

<script>
    export default{
      props: {
        video: {
          type: Object,
          default () {
            return {}
          }
        },
        spread: {
          type: Function
        }
      },
      data () {
        return {
          show: false,
          selectedVideo: {}
        }
      },
      mounted: function () {
      },
      methods: {
        hideDes: function () {
          this.show = !this.show
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
            .videos-list-box-con{
                    width:100%;
                    height:225px;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                    cursor:pointer;
                    position: static;
                    color:#FFF;

                .video{
                    &-cover{
                        width:100%;
                        height:100%;
                        background-color: rgba(0,0,0,.4);
                        position: relative;
                        top:0;
                        transition: background-color 1s;
                        cursor: pointer;
                        &:hover{
                            background-color: rgba(0,0,0,0);
                            .video-title,.video-meta{
                                opacity: 0;
                            }
                        }
                    }

                    &-title,&-meta{
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        transform: translateY(-16px);
                        font-weight: 700;
                        z-index: 1;
                        opacity: 1;
                        transition: opacity 1s;
                    }

                    &-meta{
                        transform: translateY(8px);
                    }

                    &-play-back{
                        position: fixed;
                        top:10px;
                        left:10px;
                        z-index: 3;
                        font-size: 25px;
                        padding:5px;
                        color:#FFF;
                    }

                }
            }


</style>
