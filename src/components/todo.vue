<template>
    <div class="ToDoList">
        <h3>g过滤事项</h3>

        <ul>
            <li v-for="(item,index) in list" 
            :key='index' 
            :class="{'active':item.completed}"
            @dblclick="clickFn(item)">
                <span>{{item.title}}</span>
                <span @click="delList(item.id)">删除</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {

    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
          ...mapState(['list'])
    },
    methods:{
        ...mapActions(['getList','updataList','delList']),
        clickFn(item){
            console.log(item)
            const obj={
                title:item.title,
                userId:item.userId,
                id:item.id,
                completed:!item.completed,
            }
            this.updataList(obj)
        }
    },
    created(){
        this.getList()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.ToDoList{
    width: 100%;
    /* margin: 80%; */
}
.ToDoList ul{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}
.ToDoList ul li{
    padding: 8px 10px;
    margin: 15px;
    background: palevioletred;
    color: #fff;
}
.ToDoList ul li.active{
    background: cornflowerblue;
}

.ToDoList ul li span{
    margin: 3px;
}

</style>