<template>
    <div class="index">
		<VideoList :video-list='videoList'/>
    </div>
</template>
<script>
import VideoList from '@/components/videolist/index'
export default {
	name: 'index',
	data () {
		return {
			videoList: [],
			queryList: {
				total: 0,
				date: '',
				num: 1
			},
			nextDate: '',
			apiUrl: '',
			loadState: false
		}
	},
    created () {
        let d = new Date()
        let day = d.getDate()
        let month = d.getMonth() + 1

        month = (month > 9) ? month : '0' + month

        let year = d.getFullYear()
        this.nextDate = year + '' + month + day

        this.apiUrl = 'http://baobab.kaiyanapp.com/api/v1/feed?date=' + this.nextDate + '&num=1'
    },
	mounted () {
		this.loadvideo()
		console.log('index')
	},
    methods: {
        loadvideo: function () {
			let newPageUrl = ''
			if (!(newPageUrl !== this.apiUrl)) {
				return false
			}
			newPageUrl = this.apiUrl
			this.loadState = false
			this.show = true
			this.$http.get(this.apiUrl).then(response => {
				this.videoList = this.videoList.concat(response.data.dailyList[0].videoList)
				this.apiUrl = response.data.nextPageUrl
			})
        },
        handleClick: function () {
        },
        handleScroll: function (e) {
          let loadHight = 100
          let currentScrollPosition = e.srcElement.scrollTop + window.screen.availHeight + 272 + loadHight
          let domTop = document.getElementById('vlist').scrollHeight
          currentScrollPosition > domTop && this.loadvideo()
        }
    },
	components: {
		VideoList
	}
}
</script>