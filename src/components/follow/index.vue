<template>
    <div class="autor">
        <div class="autor-header">
            {{author.type}}
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
    .author{ /*作者*/

    }
</style>