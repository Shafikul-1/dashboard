<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'

</script>

<template>

<div class="fill-button">

<RouterLink to="/admin" class="btn">Go to Admin Dashboard</RouterLink>    
</div>

</template>

<style scoped>
        
.fill-button{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}

.btn {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    transition: all 1s;
}
.btn {
    border: 3px solid red;
    color: red;
}
.btn:hover {
    color: #fff;
}
.btn::after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    transition: all 1s;
}
.btn:after {
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: red;
}
.btn:hover:after, .btn:active:after {
    width: 100%;
}
</style>