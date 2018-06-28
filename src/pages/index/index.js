import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import {Lazyload} from 'mint-ui'
import {InfiniteScroll} from 'mint-ui'
import Foot from 'components/Foot.vue'

Vue.use(InfiniteScroll);
Vue.use(Lazyload);



var app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize : 6,
    loading: false,
    allloading: false,

  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
        if(this.allloading === true){return}
      this.loading = true
      axios.post(url.hostlist, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then((res) => {
        let newlists = res.data.lists

        if (!this.lists) {
          //初始化
          this.lists = newlists
        } else {
          this.lists = this.lists.concat(newlists)
          console.log(this.lists.length)
          if(this.lists.length >= 20){this.allloading = true}
        }
        this.pageNum += 1
        this.loading = false
      })
    }
  },
  components:{
      Foot : Foot
  }
})
