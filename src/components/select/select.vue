<template>
    <div class="list-position">
        <div class="video-cover">
            <div class="video-cover-am" :style="{backgroundImage: 'url(\'' + coverimg + '\')'}"></div>
        </div> 
        <div class="date">- {{new Date(select.date).toDateString().split(' ').splice(1,2).join('. ')}} -</div>
        <videolist :videos='select.videoList'></videolist> 
        <div class="list-padding" style='height:47px'></div> 
    </div>
</template>

<script>
    import VideoList from '@/components/videolist/videolist'

    export default{
        props: {select: {type: Object}},
        data() {
            return {
                coverimg: require('../../assets/images/cover.png')
            }
        },
        methods: {
        },
        components: {
          'videolist': VideoList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
    .list-position{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            padding-bottom:47px;
            .video-list{
                width: 100%;
                height: 100%;
                .date{
                    background-color: #FFF;
                    height:7.6%;
                    font-size: 16px;
                    line-height:48px; 
                    vertical-align: middle;
                }

        }
        .date{
            height: 45px;
            background-color:#FFF;
            line-height:45px;
        }
        .video-cover{
            position: r
        }
        .video-cover-am{
            width: 100%;
            height:100%;
            background-repeat: no-repeat;;
            background-size: cover;
            background-position: 50%
        }

        .list-padding{
            position: relative;
            width: 100%;
            height: 47px;
        }
    }
</style>
