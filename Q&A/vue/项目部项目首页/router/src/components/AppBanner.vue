s<template>
    <div id="app">
        <div class="banner">
            <ul>
                <li v-for="item in banner">
                    <img  :src="item.url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { request } from 'http';
export default {
    name:"app",
    data(){
        return{
            banner:[
                {url:require("./../assets/guanggao@2x.png")},
            ]
        }
    }
}
</script>

<style>
.banner{
    width: 7.5rem;
    height: 3.84rem;

}
img{
        width: 7.5rem;
    height: 3.84rem;
}
</style>

