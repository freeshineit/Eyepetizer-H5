<template>
    <div class="index">
		<Top />
		<!-- <VideoList :video-list='videoList'/> -->
    </div>
</template>
<script>
import VideoList from '@/components/videolist/index'
import Top from '@/components/top/index'
// import moment from 'moment'
export default {
	name: 'index',
	data () {
		return {
			videoList: [],
			total: 0,
			nextDate: '',
			// apiUrl: `http://baobab.kaiyanapp.com/api/v1/feed?date=${moment().subtract(1, 'days').format('YYYYMMDD')}&num=1`,
			apiUrl: 'http://baobab.kaiyanapp.com/api/v2/feed?num=2&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83',
			loadState: false
		}
	},
	mounted () {
		// this.loadvideo()
	},
    methods: {
        loadvideo: function () {
			let newPageUrl = ''
			if (!(newPageUrl !== this.apiUrl)) {
				return false
			}
			newPageUrl = this.apiUrl
			// this.loadState = false
			// this.show = true
			this.$axios.get(this.apiUrl).then(response => {
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
		VideoList,
		Top
	}
}
</script>