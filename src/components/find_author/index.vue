<template>
    <div id='author'>
        <template v-if='author.type == "leftAlignTextHeader"'>
            <div class="g-text-left left-align-text-header">{{author.data.text}}</div>
        </template>
        <template v-else-if='author.type == "videoCollectionWithBrief"'>
            <EyeAuthor :author='author'/>
            <!-- <span>{{}}</span> -->
<!--             <div class="g-text-left video-collection-with-brief">
                <div class="author-video-header">
                    <router-link :to='author.data.header.id+""'>
                        <div class="author-cover">
                            <img :src="author.data.header.icon">
                        </div>
                        <div>
                            <div>{{author.data.header.title}}</div>
                            <div>{{author.data.header.description}}</div>
                            <span>关注</span>   
                        </div>
                    </router-link>
                </div>
                <div class="author-video-content">
                    <ul class="video-list-box">
                        <li v-for='(item, index) in author.data.itemList' :key='index+""' class="video-list">
                            <template v-if='item.type=="video"'>
                                <div class="video-cover">
                                    <img :src="item.data.cover.feed">
                                </div>
                                <div>
                                    <h3></h3>
                                    <div><span></span>/<span></span></div>
                                </div>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
 -->        </template>
        <template v-else-if='author.type=="briefCard" && author.data.title'>
            <div class="author-list brief-card">
                <div class="author-cover">
                    <img :src="author.data.icon">
                </div>
                <div>
                    <h3 class="g-text-left">{{author.data.title}}</h3>
                    <div class="g-text-left">{{author.data.description}}</div>
                </div>
                <div>
                    <span v-if='author.data.followed' >已关注</span>
                    <span >关注</span>
                </div>
            </div>
        </template>

    </div>
</template>
<script type="text/javascript">
    import EyeAuthor from '@/components/author/index'
    export default {
        name: 'find_author',
        props: {
            author: {
                type: Object,
                default: {}
            }
        },
        methods: {
        },
        components: {
            EyeAuthor
        }
    }
</script>
<style lang='less' rel='stylesheel/less' scoped>
    .author{
        .left-align-text-header{
            width: 100%;
        }

        .video-collection-with-brief{

            .author-video-header{
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }

            .author-video-content{
                width: 100%;
                overflow: scroll;                    
                /*overflow: hidden;*/
                
                .video-list-box{
                    display: -webkit-box;
                    overflow-x: scroll;  
                    overflow-y: hidden;                
                }
                .video-list{
                    width: 60%;
                }
                .video-cover{
                    img{
                        width: 100%;
                    }
                }
            }
        }

        .brief-card{

        }

        .author-cover{
            display: inline-block;

            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
</style>