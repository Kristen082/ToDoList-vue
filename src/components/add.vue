<template>
    <div class="addlist">
        <input type="text" v-model="val">
        <button @click="addList(val)">add</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:''
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['addList'])
        // addList(){
        //     console.log(this.val)
        // }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    html,body,#app{
        width: 100%;
        height: 100%;    
        list-style: none;
    }
    .addlist{
        width: 100%;
        height: 30px;
        display: flex;
        margin: 5px;
    }
    .addlist input{
        width: 80%
    }
</style>