<template>
    <div class="start" ref='start' v-if='show'>
        <div class="start-bg"></div>
        <div class='start-logo'></div>
        <div class="start-title"></div>
    </div>
</template>
<script>
    import '@/assets/css/common.css'
    export default{
        data() {
            return {
                show: true,
                transitionName: 'fade'
            }
        },
        mounted: function() {
            let _this = this
            setTimeout(() => {
                _this.$refs.start.style.left = '-100%'
                _this.$refs.start.style.opacity = '0.5'
            }, 1500)
            setTimeout(() => {
                this.show = !this.show
            }, 1800)
        }
    }
</script>
<style lang='less' rel='stylesheet/less'>

    .start{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        transition: all .3s ease;
        opacity: 1;

        &-bg, &-logo, &-title{
            background-repeat: no-repeat;
            background-size: 100%;
            overflow: hidden;
        }

        &-bg{
            width: 100%;
            height: 100%;
            background-image: url('../../assets/images/start/start-bg.jpg');
            background-color: rgba(0,0,0,0.2);
            animation: playCover 10s infinite;
        }

        &-logo{
            position: absolute;
            top:42%;
            left:50%;
            margin-left: -50px;
            width: 100px;
            height: 125px;
            background-image: url('../../assets/images/start/logo.png');
        }

        &-title{
            position: absolute;
            bottom:6%;
            left:50%;
            margin-left: -125px;
            width: 250px;
            height: 40px;
            background-image: url('../../assets/images/start/title.png');
        }
    }
</style>
