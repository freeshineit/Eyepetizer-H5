<template>
  <header>
      <div id='header'>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item, index) in DailySelection' v-if='item.type == "video"' :key="index+''+item.type">
                <router-link :to='"/play/"+item.data.id'>
                    <div class="header-swipe">
                        <div :style='{"backgroundImage": "url("+item.data.cover.feed+")"}' class="header-swipe-bg">
                            <div class="header-swipe-mask">
                                <div class="header-swipe-text">
                                    <h3 class="header-swipe-title">{{item.data.title}}</h3>
                                    <span  class="header-swipe-slogan">{{item.data.slogan}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <div class="header-link">
            <router-link to='/daily'>
                <div class="header-link-desc">
                    <span>更多开眼编辑精选 <span class="icon icon-arrow-right"></span></span>
                </div>
            </router-link>
        </div>
      </div>
  </header>
</template>
<script>
import moment from 'moment'
    export default {
        name: 'top',
        data () {
            return {
                DailySelection: [], // 头部数据
                queryParams: {
                    date: moment().format('YYYYMMDD'),
                    num: 1
                }
            }
        },
        mounted () {
            this.getList()
        },
        methods: {
            getList () {
                this.$axios.get('/api/v2/feed?num=2&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83')
                .then(response => {
                    this.DailySelection = response.data.issueList[0].itemList
                }, response => {
                    alert(response)
                })
            }
        }
    }
</script>
<style lang='less' rel='stylesheet/less' scoped > 
     #header { // 头部样式
        @height: 280px;
        height: @height;

        .header-swipe {
            height: @height;
            &-bg{ // 背景
                height:@height ;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                position: relative;
            }
            &-mask{
                height: @height;
                width: 100%;
                background-color: rgba(0,0,0,.2)
            }
            &-text{
                position: absolute;
                bottom: 30px;
                width: 100%;
            }
            &-title {
                font-size: 16px;
                color:#fff;
                font-weight: bolder;
                margin-bottom: 0px;
            }
            &-slogan{
                font-size: 12px;
                color:#fff;
            }
        }

        .header-link{
            &-desc {
                height: 38px;
                text-align: center;
                font-size: 14px;
                color: #8c8c8c;
                line-height: 37px;
                background: #fff;

                .icon{
                    color: #d0d0d0;
                }
            }
        }
     }
</style>

