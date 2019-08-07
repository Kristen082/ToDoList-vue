<template>
    <div>
        <my-add></my-add>
        <my-filter></my-filter>
        <Todo></Todo>
        
    </div>
</template>
<script>
import myAdd from '../components/add'
import Todo from '../components/todo'
import myFilter from '../components/filter'
export default {
    props:{

    },
    components:{
        myAdd,
        Todo,
        myFilter
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>