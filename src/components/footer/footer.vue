<template>
  <div class="footer">
      <div class='tab border-1px'>
        <div class="tab-item">
          <router-link tag='a' to="/select" class='select'>
            <span class="icon">
            </span>
            <span>精选</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link tag='a' to="/find" class='find'>
            <span class="icon">
                <!-- <img :src="iconImg.find[1]" alt="" > -->
            </span>
            <span>发现</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link tag='a' to="/follow" class='follow'>
            <span class="icon">
                <!-- <img :src="iconImg.follow[1]" alt="" > -->
            </span>
            <span> 关注</span>
          </router-link>
        </div>
        <div class="tab-item" >
          <router-link tag='a' to="/me" class='me'>
            <span class="icon">
                <!-- <img :src="iconImg.me[1]" alt="" > -->
            </span>
            <span>我的</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            iconImg: {
                select: [require('../../assets/images/footer/1-1.png'), require('../../assets/images/footer/2-1.png')],
                find: [require('../../assets/images/footer/1-2.png'), require('../../assets/images/footer/2-2.png')],
                follow: [require('../../assets/images/footer/1-3.png'), require('../../assets/images/footer/2-3.png')],
                me: [require('../../assets/images/footer/1-4.png'), require('../../assets/images/footer/2-4.png')]
            }
        }
    },
     methods: {
        changimg: function(e) {
        }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' rel='stylesheet/less'>
    @line-heihgt:47px;
    .footer{
        width: 100%;
        position: fixed;
        z-index: 1;
        bottom:0;
        background-color:#FFF;
        .tab{
            display: flex;
            height: @line-heihgt;
            line-height:@line-heihgt; 

            &-item{
                flex:1;
                height:100%;
                text-align: center;
                a{
                    display:block;
                    color:#b2b2b2;
                    font-size: 9px;
                    padding:7px 3px 3px;
                    &.active{
                        color:#2f2f2f;
                    }
                    span{
                        display: block;
                        flex-direction: column;
                        line-height:13px;
                        margin-top:4px;
                        background-repeat: no-repeat;
                        background-size: 100%;
                        font-size: 9px; 
                        &.icon{
                            line-height: 34px;
                            width: 20px;
                            height:21px;
                            margin: 0 auto;
                            background-image: url('../../assets/images/footer/2-1.png');   
                        } 
                    }
                    &.select.active > .icon{
                        background-image: url('../../assets/images/footer/1-1.png');
                    }
                    &.find{
                        & > .icon{
                            background-image: url('../../assets/images/footer/2-2.png');
                        }
                        &.active > .icon{
                            background-image: url('../../assets/images/footer/1-2.png');
                        }
                    }
                    &.follow{
                        & > .icon{
                            background-image: url('../../assets/images/footer/2-3.png');
                        }
                        &.active > .icon{
                            background-image: url('../../assets/images/footer/1-3.png');
                        }
                    }
                    &.me{
                        & > .icon{
                            background-image: url('../../assets/images/footer/2-4.png');
                        }
                        &.active > .icon{
                            background-image: url('../../assets/images/footer/1-4.png');
                        }
                    }
                }
            }
        }
    }
</style>
