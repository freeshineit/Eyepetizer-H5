<template >
    <div class="videos-list-box" >
        <div class="videos-list-box-title">- {{new Date(videos.dailyList[0].date).toDateString().split(' ').splice(1,2).join('. ')}} -</div>
        <v-video v-show='!show' :key ='video.id' v-for="video in videos.dailyList[0].videoList" :video='video' :spread="spread"></v-video> 
        <v-videodes :video='selectedVideo' :show='show' :hideDes="hideDes"></v-videodes>
    </div> 
</template>

<script>
    import videodes from '@/components/videodes/videodes'
    import video from '@/components/video/video'
    export default{
        props: {
            videos: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                show: false,
                selectedVideo: {}
            }
        },
        mounted: function() {
        },
        methods: {
            spread: function(video, event) {
                this.show = !this.show
                this.selectedVideo = video
                return false
            },
            hideDes: function() {
                this.show = !this.show
                return false
            }
        },
        components: {
            'v-videodes': videodes,
            'v-video': video
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
