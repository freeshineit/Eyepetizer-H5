import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/pages/container/index'
import Index from '@/pages/index/index'
import Find from '@/pages/find/index'
import Follow from '@/pages/follow/index'
import Profile from '@/pages/profile/index'
import Play from '@/pages/play/index'
import DailySelection from '@/pages/dailyselection/index'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		redirect: '/index',
		component: Container,
		children: [
			{ // // 首页
				path: '/index',
				name: 'index',
				component: Index
			}, { // 发现
				path: '/find/',
				redirect: '/find/hot'
			}, { // 发现
				path: '/find/:id',
				name: 'find',
				component: Find
			}, { // 关注
				path: '/follow',
				name: 'follow',
				component: Follow
			}, { // 我的
				path: '/profile',
				name: 'profile',
				component: Profile
			}]
		}, { // 播放页面
			path: '/play/:id',
			name: 'paly',
			component: Play
		}, { // 每日精选
			path: '/daily',
			name: 'daily',
			component: DailySelection
		}
	],
	linkActiveClass: 'active'
})
