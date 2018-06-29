let url ={
    hostlist: '/index/hotList',
    banner:  '/index/banner',
    topLists:'/category/topList',
    subLists: '/category/subList',
    rank: '/category/rank',
}

let host = 'http://rapapi.org/mockjsdata/34221'


for ( let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url
