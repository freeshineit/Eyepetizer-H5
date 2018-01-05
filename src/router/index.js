import Vue from 'vue'
import Router from 'vue-router'

// import Select from '@/components/select/select'
import Container from '@/pages/container/index'
import Index from '@/pages/index/index'
import Find from '@/pages/find/index'
import Follow from '@/pages/follow/index'
import Profile from '@/pages/profile/index'
import Play from '@/pages/play/index'

Vue.use(Router)

export default new Router({
    routes: [
    	{
            path: '/',
            redirect: '/index',
            component: Container,
            children: [
            	{
			        path: '/index',
			        name: 'index',
			        component: Index
			    }, {
			        path: '/find',
			        name: 'find',
			        component: Find
			    }, {
			        path: '/follow',
			        name: 'follow',
			        component: Follow
			    }, {
			        path: '/profile',
			        name: 'profile',
			        component: Profile
			    }
            ]
        }, {
	        path: '/play/:id',
	        name: 'paly',
	        component: Play
	    }
    ],
    linkActiveClass: 'active'
})