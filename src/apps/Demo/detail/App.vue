<template>
    <div class="">
        <div class="warp" @click="change" >
            vue 多页面 click
        </div>
        <Subassembly/>
    </div>
</template>

<script>
import Subassembly from "./components/Subassembly.vue";
export default {
    components: {
        Subassembly
    },
    data() {
        return {
            eventidY:1214314141 //点击埋点ID
        };
    },
    methods: {
        change(value){
           alert('vue')
        }
    },
    created(){
       
    },
};
</script>


<style lang="scss" >


</style>
