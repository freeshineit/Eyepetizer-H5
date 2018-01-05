<template>
    <div class="select-box">
        <v-select-top></v-select-top>
        <div class="videos-list swiper-slide"  ref='vlist' @scroll="handleScroll" id='vlist' >
            <v-videolist :videos='videos' :key='videos.date' v-for="videos in selects"></v-videolist>
            <div v-show='show' style='height:50px;'>loading.....</div>
        </div>
    </div>
</template>

<script>
    import VideoList from '@/components/videolist/videolist'
    import SelectTop from '@/components/selecttop/selecttop'

    export default{
        data() {
            return {
                selects: [],
                coverimg: require('../../assets/images/cover.png'),
                apiUrl: '',
                newDate: '',
                nextDate: '20170318',
                wHeight: '0',
                loadState: true,
                show: false
            }
        },
        mounted: function() {
            this.loadvideo()
        },
        created() {
            let d = new Date()
            let day = d.getDate()
            let month = d.getMonth() + 1

            month = (month > 9) ? month : '0' + month

            let year = d.getFullYear()
            this.nextDate = year + '' + month + day

            this.apiUrl = 'http://baobab.kaiyanapp.com/api/v1/feed?date=' + this.nextDate + '&num=1'
        },
        methods: {
            loadvideo: function() {
                let newPageUrl = ''

                if (!(newPageUrl !== this.apiUrl && this.loadState)) {
                    return false
                }
                newPageUrl = this.apiUrl
                this.loadState = false
                this.show = true
                this.$http.get(this.apiUrl).then(res => {
                    res = res.data
                    this.selects.push(res)
                    this.apiUrl = res.nextPageUrl
                    this.loadState = true
                    this.show = false
                })
            },
            handleClick: function() {
            },
            handleScroll: function(e) {
                let loadHight = 100
                let currentScrollPosition = e.srcElement.scrollTop + window.screen.availHeight + 272 + loadHight
                let domTop = document.getElementById('vlist').scrollHeight
                currentScrollPosition > domTop && this.loadvideo()
            }
        },
        components: {
          'v-videolist': VideoList,
          'v-select-top': SelectTop
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped rel='stylesheet/less'>
    .videos-list{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        padding-top:225px;
        padding-bottom:47px;
        overflow-y: scroll;
    }

    .select{
        &-box{
            width: 100%;
            height: 100%;
        }
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
    }
</style>
