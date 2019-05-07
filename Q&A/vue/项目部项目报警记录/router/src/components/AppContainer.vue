<template>
    <div id="app2">
        <div class="container">
            <ul>
                <li v-for="item in container">
                    <img class="img" :src="item.url" alt="">

                    {{item.name}}
                <span class="bt1">{{item.bt1}}<span class="sj1">{{item.sj1}}</span><span class="dz1">{{item.dz1}}</span></span>
                <span class="bt2">{{item.bt2}}<span class="sj2">{{item.sj2}}</span><span class="dz2">{{item.dz2}}</span></span>
                <span class="bt3">{{item.bt3}}<span class="sj3">{{item.sj3}}</span><span class="dz3">{{item.dz3}}</span></span>
                <span class="bt4">{{item.bt4}}<span class="sj4">{{item.sj4}}</span><span class="dz4">{{item.dz4}}</span></span>
                <span class="bt5">{{item.bt5}}<span class="sj5">{{item.sj5}}</span><span class="dz5">{{item.dz5}}</span></span>
                <span class="bt6">{{item.bt6}}<span class="sj6">{{item.sj6}}</span><span class="dz6">{{item.dz6}}</span></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { constants } from 'crypto';
import { METHODS } from 'http';
export default {
    name:"app2",
    data(){
        return{
            container:[
                {url:require("./../assets/move@2x.png"),bt1:'有人移动保险箱',sj1:'2分钟前',dz1:'杭州'},
                {url:require("./../assets/electricity@2x.png"),bt2:'保险箱电量低于20%',sj2:'25分钟前',dz2:'广东'},
                {url:require("./../assets/modify@2x.png"),bt3:'修改配置',sj3:'两天前',dz3:'上海'},
                {url:require("./../assets/electricity@2x.png"),bt4:'保险箱电量低于20%',sj4:'18天前',dz4:'上海'},
                {url:require("./../assets/move@2x.png"),bt5:'有人移动保险箱',sj5:'2分钟前',dz5:'杭州'},
                {url:require("./../assets/move@2x.png"),bt6:'有人移动保险箱',sj6:'2分钟前',dz6:'杭州'},
            ]
        }
    }

}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    
}
    .container{
        width: 7.5rem;
        height: 11.08rem;
    }
    .img{
        margin-left: 0.3rem;
        margin-top: 0.28rem;
        float: left ;
        width: 0.9rem;
        height: 0.9rem;
        }
    .bt1{
        font-size: 22px;
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.3rem;
    }
      .sj1{
        font-size: 20px;
        position: absolute;
        top: 1.65rem;
        left: 1.6rem;
        color:#d2d2d2;


    }
      .dz1{
        font-size: 20px;
        position: absolute;
        top: 1.4rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
        .bt2{
        font-size: 22px;
        float: left;
        margin-top: 0.3rem;
        margin-left: 0.1rem;
    }
      .sj2{
        font-size: 20px;
        position: absolute;
        top: 3rem;
        left: 1.7rem;
        color:#d2d2d2;


    }
      .dz2{
        font-size: 20px;
        position: absolute;
        top: 2.8rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
        .bt3{
        font-size: 22px;
        float: left;
        margin-top: 0.3rem;
        margin-left: 0.1rem;
    }
      .sj3{
        font-size: 20px;
        position: absolute;
        top: 4.3rem;
        left: 1.7rem;
        color:#d2d2d2;


    }
      .dz3{
        font-size: 20px;
        position: absolute;
        top: 4.2rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
     .bt4{
        font-size: 22px;
        float: left;
        margin-top: 0.3rem;
    }
      .sj4{
        font-size: 20px;
        position: absolute;
        top: 5.6rem;
        left: 1.7rem;
        color:#d2d2d2;


    }
      .dz4{
        font-size: 20px;
        position: absolute;
        top: 5.4rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
      .bt5{
        font-size: 22px;
        float: left;
        margin-top: 0.3rem;
    }
      .sj5{
        font-size: 20px;
        position: absolute;
        top: 6.9rem;
        left: 1.7rem;
        color:#d2d2d2;


    }
      .dz5{
        font-size: 20px;
        position: absolute;
        top: 6.7rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
      .bt6{
        font-size: 22px;
        float: left;
        margin-top: 0.3rem;
    }
      .sj6{
        font-size: 20px;
        position: absolute;
        top: 8.2rem;
        left: 1.7rem;
        color:#d2d2d2;


    }
      .dz6{
        font-size: 20px;
        position: absolute;
        top: 8.1rem;
        left: 5.69rem;
        color:#d2d2d2;
    }
    li{
      border-bottom: 1px solid #e8e8e8;
    }
</style>