import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/select/select'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/select',
        name: 'Select',
        component: Select
    }],
    linkActiveClass: 'active'
})

