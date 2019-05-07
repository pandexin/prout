<template>
    <div id="app">
        <div class="container">
            <ul>
                <li v-for="item in container">
                    <img class="pic5" :src="item.url" alt="">
                    {{item.name}}
                    <span class="bt">{{item.bt}}</span>
                    <span class="sj">{{item.sj}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            container:[
                {url:require("./../assets/safebox_icon@2x.png"),
                bt:'MIKO保险箱',
                sj:'最后一次位置:杭州'},


            ]
        }
    }
}
</script>
<style>
.container{
    width: 7.5rem;
    height: 7.3rem;
}
.pic5{
    width: 2.4rem;
    height: 2.47rem;
    float: left;
    margin-left: 2.56rem;
    margin-top: 1.46rem;
}
.bt{
    font-size: 24px;
    float: left;
    clear: both;
    color: black;
    margin-left: 2.5rem;
    margin-top: 0.4rem;
}
.sj{
    font-size: 24px;
    float: left;
    clear: both;
    color: #b9b9b9;
    margin-left: 2rem;
    margin-top: 0.2rem;
}
</style>


