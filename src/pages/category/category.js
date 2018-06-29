
import 'css/common.css'
import './category.css'


import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import { Loadmore } from 'mint-ui'

Vue.component(Loadmore.name, Loadmore)

new Vue({
    el:'#app',
    data:{
        currentindex:0,
        topLists:null,
        subData:null,
        rankData:null,
        translate3d:"translate3d(0px 100px 0px)"
    },
    created(){
        this.getToplists()
        this.getRank()
        this.getSublists(0,0)
    },
    methods:{
        getToplists(){ //获取一级菜单
            axios.get(url.topLists).then((res)=>{
                this.topLists = res.data.lists
            })
        },
        getSublists(id,index){//获取二级菜单
            this.currentindex = index
            console.log(id)
            axios.post(url.subLists,id).then((res)=>{
                this.subData = res.data.data
            })
        },
        getRank(){ //获取综合菜单
            axios.post(url.rank).then((res)=>{
                this.rankData = res.data.data
            })
        },
        loadTop() {
            this.loadmore 
        },
    },
    components:{
        Foot
    },
    filters:{
        number(price){
            return price + ".00"
        }
    }
})