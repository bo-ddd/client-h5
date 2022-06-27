<template>
    <div class="home">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<style>
    .home{
        font-size:3rem;
        display:grid;
        grid-template-columns: repeat(5,1fr);
        height:100vh;
        background:red;
    }

    .item:nth-of-type(odd){
        background:yellow;
    }
</style>