<template>
    <div>
        <div class="category-header">
            <div><h3>{{category.data.header.title}}</h3></div>
            <div><span>{{category.data.header.subTitle}}</span></div>
        </div>
        <div class="category-content">
            <!-- 跑马灯 -->
            <mt-swipe :auto="0">
                <mt-swipe-item v-for='(item, index) in category.data.itemList' v-if='item.type == "video"' :key="index+''+item.type">
                    <router-link :to='"/play/"+item.data.id'>
                        <div class="category-swipe">
                            <div :style='{"backgroundImage": "url("+item.data.cover.feed+")"}' class="header-swipe-bg">
                                <img :src="item.data.cover.feed" width="100%">
                            </div>
                        </div>
                        <div class="category-swipe-desc">
                            <div><span>#{{item.data.category}}</span>{{item.data.title}}</div>
                            <div>{{item.data.duration | fromatTime}}</div>
                        </div>
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script type="text/javascript">
    import fromatTime from '@/filters/fromatTime'
    export default {
        name: 'category',
        props: {
            category: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
            }
        },
        mounted () {
            console.log(this.category)
        },
        filters: {
            fromatTime
        }
    }
</script>
<style lang="less" rel='stylesheet/less' scoped>
    .category{

        &-header{
            height: 40px;
            background-color: #fff;
        }

        &-content{
            height: 250px;
        }
    }
</style>