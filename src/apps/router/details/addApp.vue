<template>
    <div>
        <div  slot='buttons'>
            <router-link to='/list'>
            	<div >路由切换</div>
            </router-link>

        </div>
        <a href="http://localhost:8090/apps/Demo/detail/index.html">Demo/detail/index.html</a>
    </div>
</template>

<script>

export default {
    name: 'add',
    components: {

    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less">
    a{
        height: 10px;
        width: 20px;
    }
</style>
