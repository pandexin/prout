<template>
    <div id="app">
        <div class="banner">
            <span class="z">{{z}}</span>
            <div class="zn"></div>
            <span class="n">{{n}}</span>
            <span class="bxx">{{bxx}}</span>
            <span class="aqg">{{aqg}}</span>
        </div>
    </div>
</template>
<script>
import {fontsizeset} from "./../fontsizeset.js"
export default {
    data(){
        return{
            z:"智",
            n:"能",
            bxx:"保险箱",
            aqg:"有安全感才能稳稳地幸福"
        }
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.banner{
    width: 7.5rem;
    height: 13.34rem;
    background-image: url("./../assets/back.jpg");
    background-size:118%,100%;
    background-position:-40px 1px;
    background-repeat :no-repeat;
}
.z{
    float: left;
    color: white;
    position:absolute;
    margin-left: 2.56rem;
    margin-top: 3.2rem;
    font-size: 55px;
}
.zn{
    width: 1.5rem;
    height: 0.03rem;
    background-color: white;
    float: left;
    transform:rotate(-50deg);
    position:absolute;
    margin-left: 2.8rem;
    margin-top: 4.4rem;
}
.n{
    float: left;
    color: white;
    position:absolute;
    margin-left: 3.5rem;
    margin-top: 4.4rem;
    font-size: 55px;
}
.bxx{
    float: left;
    width: 0.5rem;
    height: 1.5rem;
    font-size: 35px;
    color: white;
    position:absolute;
    margin-left: 2.56rem;
    margin-top: 5.4rem;
}
.aqg{
    float: left;
    width: 0.5rem;
    height: 1.5rem;
    font-size: 20px;
    color: white;
    position:absolute;
    margin-left: 3.56rem;
    margin-top: 5.8rem;
    line-height:19px;
}
</style>

