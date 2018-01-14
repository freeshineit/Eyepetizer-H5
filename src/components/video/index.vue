<template>
    <div class="video">
        <!-- 头部 swipe -->
        <template v-if='video.type == "horizontalScrollCard"'>
            <div class="horizontal-scroll-card">
                <mt-swipe :show-indicators="false">
                  <mt-swipe-item v-for='(item, index) in video.data.itemList' :key='index+""+item' style='height: 280px;'>
                      <div :style='{"backgroundImage": "url("+item.data.image+")"}' class="scroll-img">
                          <img :src="item.data.image" width="100%">
                      </div>
                  </mt-swipe-item>
                </mt-swipe>
            </div>
        </template>
        <template v-if='video.type == "textHeader"'>
            <div class="text-header">
                <span>{{video.data.text}}</span>
            </div>
        </template>
        <template v-if='video.type == "video"'>
            <div class="video-box">
                <img :src="video.data.cover.feed" width="100%">
            </div>
        </template>
        <template v-if='video.type == "squareCardCollection"'>
            <div class="square-card-collection">
                <span>{{video.data.header.title}} <span class="icon icon-arrow-right"></span></span>
                <div>
                    <ul style="overflow:hidden">
                        <li v-for='(item, index) in video.data.itemList' style="width:35%;display:inline-block">
                            <div>
                                <img :src="item.data.image" width="100%">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
    export default{
        name: 'video',
        props: {
            video: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
            }
        },
        mounted: function () {
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less' scoped>
@height: 280px;
.horizontal-scroll-card, .square-card-collection{
    height: @height;
}
.horizontal-scroll-card{
    height: 250px;
    .scroll-img{
        background-repeat: no-repeat;
        background-size: 100%;
    }
}

.text-header{
    height: 40px;
    background-color: #fff;
}

.video-box{
    height: 250px;
    background-color: #fff;
}


</style>
