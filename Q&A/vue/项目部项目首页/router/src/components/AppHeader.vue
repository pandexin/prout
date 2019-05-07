<template>
  <div id="app">
    <div class="header">
      <ul>
        <li v-for="item in header">
            <img class="pic"   :src="item.url" alt="">
            {{item.name}}
            <span class="bt1">{{item.bt1}}</span>
            <img class="src"   :src="item.src" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {fontsizeset} from "./../fontsizeset.js"
import { request } from 'http';
import { constants } from 'crypto';
export default {
  name:"app",
  data(){
    return{
        header:[
          {url:require("./../assets/tab_associated@2x.png"),bt1:'智能保险箱',
          src:require("./../assets/add@2x.png")}
        ]
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 7.5rem;
  height: 0.9rem;
  background-color: black;
}
.pic{
  width: 0.56rem;
  height: 0.56rem;
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.15rem;
}
.src{
  width: 0.56rem;
  height: 0.56rem;
  float: left;
  color: white;
    margin-left: 1.8rem;
  margin-top: 0.15rem;
}

.bt1{
      font-size: 22px;
      color: white;
      float: left;
      margin-top: 0.2rem;
      margin-left: 2rem;

    }
</style>


