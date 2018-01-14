<template>
    <div id='author' class="author">
        <div class="g-text-left video-collection-with-brief">
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
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'author',
        props: {
            author: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang='less' rel='stylesheet/less' scoped>
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


