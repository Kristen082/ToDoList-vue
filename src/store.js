import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)//注册

export default new Vuex.Store({//抛出
    state:{//共享的数据
        list:[]
    },
    getters:{//类似computed

    },
    mutations:{//同步方法
        getLists(state,list){
            state.list=list;
        },
        addLists(state,obj){
            //添加到前面
            state.list.unshift(obj)
        },
        updataLists(state,obj){
            //修改
            let index=state.list.findIndex(item=>item.id==obj.id);
            state.list.splice(index,1,obj)
        },
        delLists(state,id){
            //删除 
            state.list=state.list.filter(item=>item.id!=id)
        }    
    },
    actions:{//异步方法(axios)
        getList({commit}){//获取数据
            axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
                console.log(res)
                //同步到页面
                commit('getLists',res.data)
            })
        },
            //添加数据
        addList({commit},title){
            axios.post('http://jsonplaceholder.typicode.com/todos',{title,
            Userid:1,
            completed:false}).then((res)=>{
                console.log(res.data)
                commit('addLists',res.data)
            })
        },
        //更新数据
        updataList({commit},obj){
            axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`,obj).then((res)=>{
                console.log(res.data)
                commit('updataLists',res.data)

            })
        },
        //删除数据
        delList({commit},id){
            axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
                console.log(res)
                commit('delLists',id)

        })

        }
    }
})  