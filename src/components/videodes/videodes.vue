<template>
    <transition name="bounce">
    <div class="video-play" v-if='Showdes' :play-id="video.id" @click.stop="" >
        <div class='blurbg' :style="{backgroundImage: 'url(\'' + video.coverForFeed + '\')'}"></div>
        <div class="video-play-box" :height="(video.playInfo[0].height * deviceWidth ) / video.playInfo[0].width + 'px'">
                <div class="video-source" height="" >
                    <video controls="" width="100%" name="media" ref='video'>
                        <source :src="video.playUrl" type="video/mp4">
                    </video>
                </div>
                <div class="video-cover" v-show="play" :style="{backgroundImage: 'url(\'' + video.coverForFeed + '\')'}">
                </div>
                <div class="video-start"  v-show="play" @click.stop="player">
                    <span class='icon icon-bofang'></span>
                </div>
                <span class="video-play-back icon icon-xiala" v-show='show' @click.stop='hideDes' ></span>
        </div>
        <div class="video-info">
            <h1 class="video-title">{{video.title}}</h1>
            <h3 class="video-meta">#{{video.category}}&nbsp;&nbsp;/&nbsp;&nbsp;{{Math.round(video.duration / 60)}}' {{(video.duration % 60)}}"</h3>
            <div class="video-author-info" v-if='video.author != null' :aid='video.author.id'>
                <div class="video-author">
                    <img :src="video.author.icon" :alt="video.title +'--'+ video.author.name" height='40'>
                    <div class="video-author-name">{{video.author.name}}</div>
                </div>
                <div class="author-follow">
                    <span>+关注</span>   
                </div>
            </div>
            <div class="video-desc">
                {{video.description}}
            </div>
        </div>
        <div class="video-op">
            <ul>
                <li class="video-op-li">喜欢</li>
                <li class="video-op-li">分享</li>
                <li class="video-op-li">评论</li>
                <li class="video-op-li">缓存</li>
            </ul>
        </div>
    </div>
    </transition>
</template>

<script>
    // import '@/assets/css/common.css'
    export default{
      props: {
        video: {type: Object,
          default () {
            return {}
          }
        },
        show: {type: Boolean},
        hideDes: {type: Function}
      },
      data () {
        return {
          play: true,
          deviceWidth: document.body.clientWidth,
          videoEl: null,
          childShow: this.show
        }
      },
      mounted () {
      },
      created () {
      },
      computed: {
        Showdes: function () {
          let show = false
          show = this.show
          return show
        }
      },
      watch: {
        show: function () {
          if (!this.show) {
            this.$refs.video.pause()
            this.play = true
          }
        }
      },
      methods: {
        reLoadVodeo: function () {
        },
        player: function () {
          this.$refs.video.load()
          this.$options.methods.launchFullscreen(this.$refs.video)
          this.$refs.video.play()
          this.play = !this.play
          return false
        },
        launchFullscreen: function (element) {
          if (element.requestFullscreen) {
            element.requestFullscreen()
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>

    .video-play{
        position: fixed;
        top: 0;
        left: 0;
        z-index:2;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity:1;

        .blurbg{
            width: 100%;
            height:100%;
            filter: blur(15px);
            /*background-position: */
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top:0;
            left:0;
        }

        &-box{
            width: 100%;
            max-height: 100%;
            overflow: hidden;
            position: relative;
        }

        .video{
            &-source{
                width: 100%;
                height: 100%;
                position: relative;
                top:0;
                left:0;
            }
            &-cover,&-start{
                width: 100%;
                height:100%;
                position: absolute;
                top:0;
                left:0;
            }
            &-cover{
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
                animation: playCover 10s infinite;
            }
            &-start{
                width: 100%;
                height: 100%;
                font-size: 20px;
                z-index:1;
                transition: background-color 1s;
                color: #FFF;

                &:hover{
                    background-color:rgba(0,0,0,.4);
                }
                & .icon-bofang{
                    position: absolute;
                    top:50%;
                    left:50%;
                    margin-left: -27px;
                    margin-top:  -24px;
                    font-size: 54px;
                }
            }

            &-play-back{
                position: absolute;
                top: 15px;
                left: 15px;
                font-size: 30px;
                color: #fff;
                z-index: 2;
                padding:5px;
            }
        }

        .video-info{
            color:#FFF;
            padding:15px 15px 15px;
            text-align: left;
            position: relative;
            .video-title{
                font-size: 20px;
                margin-bottom: 7px;
                font-weight: 700;
            }
            .video-meta{
                margin: 0;
                margin-bottom: 12px;
                font-size: 14px;
                font-weight: 700;
            }
            .video-desc{
                padding:10px 10px 10px 0;
                border-top: 1px solid #FFF;
                font-size: 14px;
            }

        }
        .video-author-info{
            height: 50px;
            clear:both;
            .video-author{
                clear:both;
                font-size: 0;
                img{
                    height: 40px;
                    width:40px;
                    border-radius: 50%;
                    display: inline-block;
                    float:left;
                }
                &-name{
                    float:left;
                    display: inline-block;
                    font-size: 14px;
                    margin-top:15px;
                    margin-left:10px;
                }
            }
            .author-follow{
                float:right;
                display: inline-block;
                margin-top:10px;
                font-size:12px;
                border:1px solid #FFF;
                padding:3px;
                border-radius: 3px;
            }
        }
        .video-op{
            position: relative;
            color:#FFF;
            padding:5px;
            li{
                width: 50px;
                height: 20px;
                float:left;
            }
            
        }
    }

    .bounce-enter-active {
      transition: all .5s ease;
    }
    .bounce-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .bounce-enter, .bounce-leave-active {
      transform: translateY(10px);
      opacity: 0;
    }

</style>
