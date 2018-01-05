<template>
  <div class="footer">
        <mt-tabbar v-model="selected" @input='tabbarChange'>
            <mt-tab-item id="/index" >
              <span slot="icon" class='icon footer_index'></span>
                首页
            </mt-tab-item>
            <mt-tab-item id="/find" >
                <span slot="icon" class='icon footer_find'></span>
                发现
            </mt-tab-item>
            <mt-tab-item id="/follow" >
                <sapn slot="icon" class='icon footer_follow'></sapn>
                关注
            </mt-tab-item>
            <mt-tab-item id="/profile" class='g-font-Lobster' >
                <span slot="icon" class='icon footer_profile'></span>
                我的
            </mt-tab-item>
        </mt-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected: this.$route.path
        }
    },
    mounted() {
        this.switchTabber(this.selected)
    },
    methods: {
        tabbarChange (id) {
            console.log(this.$route)
            this.switchTabber(id)
        },
        switchTabber(id) {
            switch (id) {
                case '/index' :
                    this.$router.push('/index')
                    console.log(document.querySelector('.footer_find img').attr)
                     break
                case '/find' :
                    this.$router.push('/find')
                    break
                case '/follow' :
                    this.$router.push('/follow')
                     break
                case '/profile' :
                    this.$router.push('/profile')
                    break
            }
        }
     }
}
</script>

<style lang='less' rel='stylesheet/less'>
    .footer{
        .mint-tabbar{
            background-color: #fff;
            background-image: none;
            border-top: 1px solid #999;

            .mint-tab-item{
                color: #999;
            }
            .mint-tab-item.is-selected{
                background-color: transparent;
                color: #000;
            }
        }
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped rel='stylesheet/less'>
    .footer{
        .icon{
            background-repeat: no-repeat;
            background-size: cover;
        }
        .footer_index{ //首页
            background-image: url('../../assets/images/footer/1-1.png');
        }
        .is-selected .footer_index{
            background-image: url('../../assets/images/footer/1-2.png');
        }
        .footer_find{ // 发现
            background-image: url('../../assets/images/footer/2-1.png');
        }
        .is-selected .footer_find{
            background-image: url('../../assets/images/footer/2-2.png');
        }
        .footer_follow{ // 关注
            background-image: url('../../assets/images/footer/3-1.png');
        }
        .is-selected .footer_follow{
            background-image: url('../../assets/images/footer/3-2.png');
        }
        .footer_profile{ // 我的
            background-image: url('../../assets/images/footer/4-1.png');
        }
        .is-selected .footer_profile{
            background-image: url('../../assets/images/footer/4-2.png');
        }
    }
</style>
