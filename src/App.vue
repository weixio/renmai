<template>
    <div id="app">
        <RenmaiEntra></RenmaiEntra>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import RenmaiEntra from './components/RenmaiEntra'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            RenmaiEntra
        }
    }
</script>

<style lang="less">
    @import "~element-ui/lib/theme-chalk/index.css";
</style>
