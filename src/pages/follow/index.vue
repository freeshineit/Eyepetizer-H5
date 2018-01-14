<template>
    <div class="follow" id='follow'>
        <div class="g-font-Lobster">header</div>
        <EyeAuthor v-for='(author, index) in followData' :author='author' :key='index+""' />
    </div>
</template>
<script>
    import EyeAuthor from '@/components/author/index'
    export default {
        name: 'follow',
        data () {
            return {
                followUrl: '/api/v4/tabs/follow',
                followData: []
            }
        },
        mounted () {
            this.getFollowData()
        },
        methods: {
            getFollowData () {
                // 获取关注数据
                this.$axios.get(this.followUrl)
                .then(response => {
                    this.followData = response.data.itemList
                    this.followUrl = this.$utils.getApi(response.data.nextPageUrl)
                })
            }
        },
        components: {
            EyeAuthor
        }
    }
</script>
<style lang='less' rel='stylesheet/less'>
    .follow{
    }
</style>
