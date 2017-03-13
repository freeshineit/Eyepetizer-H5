<template >
    <div class="video-list">
        <div class="video" v-for="video in videos" @click.stop="spread(video ,$event)" :id="video.id" :style="{backgroundImage: 'url(\'' + video.coverForFeed + '\')'}">
            
            <div class="title">{{video.title}}</div>
            <div class="meta">#{{video.category}}&nbsp;&nbsp;/&nbsp;&nbsp;{{Math.round(video.duration / 60)}}' {{(video.duration % 60)}}"</div>
            <div class="cover"></div>
        </div>
        <videodes :video='selectedVideo' :show='show'></videodes>
        <span class="video-play-back icon icon-xiala" v-show='show' @click.stop='hideDes' ></span>
    </div> 
    
</template>

<script>
    import videodes from '@/components/videodes/videodes'
    export default{
        props: {videos: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                show: false,
                selectedVideo: {}
            }
        },
        methods: {
            spread: function(video, event) {
                this.show = !this.show
                console.log(this.show)
                this.selectedVideo = video
                return false
            },
            hideDes: function() {
                this.show = !this.show
            }
        },
        components: {
            videodes
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
    .video{
        width:100%;
        height:36.1%;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        cursor:pointer;
        position: relative;
        color:#FFF;
    }

    .cover{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.4);
        position: absolute;
        top:0;
        transition: background-color 1s;
        cursor: pointer;
        &:hover{
            background-color: rgba(0,0,0,0);
        }
    }
    .title{
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-16px);
        font-weight: 700;
        z-index: 1;
    }
    .meta{
        position: absolute;
        top:50%;
        width: 100%;
        transform: translateY(8px);
        font-size: 13px;
        z-index: 1; 
    }
    .title:hover + .cover,.meta:hover + .cover{
        background-color: rgba(0,0,0,0);
    }

    .video-play-back{
        position: fixed;
        top:10px;
        left:10px;
        z-index: 3;
        font-size: 25px;
        padding:5px;
        color:#FFF;
    }

    .video-cover{
        position: relative;
        font-size: 24px;
        width:100%;
        height:36.1%;
        color:#FFF;
        .top-title{
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-20px);
            font-weight: 700;
        }
    }

</style>
