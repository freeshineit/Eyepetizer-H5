<template>
    <div id='find'>
        <div class="find-top">
            <div>
                <span class="g-font-Lobster">discover</span>
                <img src="" alt='discover'>    
                <!-- <Serach /> -->
            </div>
        </div>
        <div class='find-nav'  >
            <mt-navbar v-model="navActive" @input='navBarChange' :is-fixed='true'>
                <mt-tab-item id="hot">热门</mt-tab-item>
                <mt-tab-item id="category">分类</mt-tab-item>
                <mt-tab-item id="author">作者</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container v-model="navActive">
                <mt-tab-container-item id="hot">
                    <div class="hot">
                        <ul 
                            infinite-scroll-disabled="loading"
                            infinite-scroll-distance="10">
                            <li v-for='(item, index) in hotData' :key='index+""'>
                                <EyeVideo  :video='item'/>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="category">
                    <div class="category">
                        <ul 
                            infinite-scroll-disabled="loading"
                            infinite-scroll-distance="10">
                            <li v-for='(item, index) in categoryData' :key='index+""'>
                                <EyeCategory :category='item' />
                            </li>
                        </ul>

                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="author">
                    <div class="author">
                        <ul 
                            infinite-scroll-disabled="loading"
                            infinite-scroll-distance="10">
                            <li v-for='(item, index) in authorData' :key='index+""'>
                                <EyeAuthor :author='item'/>
                            </li>
                        </ul>
                        <!-- infinite-scroll -->
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Video from '@/components/video/index'
    import Category from '@/components/category/index'
    import AuthorList from '@/components/find_author/index'
    export default {
        name: 'find',
        data () {
            return {
                navActive: this.$route.params.id ? this.$route.params.id : 'hot',
                hotData: [],
                hotApi: '/api/v4/discovery/hot',
                categoryData: [],
                categoryApi: '/api/v4/discovery/category',
                authorData: [],
                authorApi: '/api/v4/pgcs/all',
                navActiveData: [this.$route.params.id ? this.$route.params.id : 'hot'],
                loading: false
            }
        },
        mounted () {
            this.asynGetData()
        },
        methods: {
            getHotData () { // 获取热门数据
                // if (!this.loading && this.hotApi != '/api/v4/discovery/hot') {
                //     return
                // }
                this.loading = true
                // setTimeout(() => {
                    this.$axios.get(this.hotApi)
                    .then(response => {
                        this.hotData = this.hotData.concat(response.data.itemList)
                        this.hotApi = this.getApi(response.data.nextPageUrl)
                        console.log(this.hotApi)
                        this.loading = false
                    }, response => {
                        console.log(response.status)
                    })
                // }, 2500)
            },
            getCategoryData () { // 获取分类数据
                this.$axios.get(this.categoryApi)
                .then(response => {
                    this.categoryData = this.categoryData.concat(response.data.itemList)
                    this.categoryApi = this.getApi(response.data.nextPageUrl)
                }, response => {
                    console.log(response.status)
                })
            },
            getAuthorData () { // 获取作者数据
                this.$axios.get(this.authorApi)
                .then(response => {
                    console.log()
                    this.authorData = this.authorData.concat(response.data.itemList)
                    this.authorApi = this.getApi(response.data.nextPageUrl)
                    console.log(this.authorData)
                }, response => {
                    console.log(response.status)
                })
            },
            navBarChange (val) { // tabber 改变触发
                this.$router.push(val)
                if (this.navActiveData.includes(val)) {
                    return
                }
                this.navActiveData.push(val)
                this.asynGetData()
            },
            asynGetData () { // 根据navbar的激活状态 异步获取数据
                this.navActive == 'hot'
                ? this.getHotData() : this.navActive == 'category'
                ? this.getCategoryData() : this.getAuthorData()
            },
            getApi (url) { // 获取请求路径
                return this.$utils.getApi(url)
            }
        },
        components: {
            'EyeVideo': Video,
            'EyeCategory': Category,
            'EyeAuthor': AuthorList
        }
    }
</script>
<style lang='less' rel='stylesheet/less'>
    
</style>
