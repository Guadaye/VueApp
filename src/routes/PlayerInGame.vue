<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }} 

        <pgScoreBoard></pgScoreBoard>
        <h1> Team1 Player: Echo </h1>
        <button class="button">Click Me!</button>
        </div>

    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import pgScoreBoard from '@/components/ScoreBoard.vue'
    class PlayerInGameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'PlayerInGamePage',
            }
        }
    }

    export default new PlayerInGameController('pgPlayerInGame',{pgScoreBoard});

</script>
<style>
/* Local styles for this template */
    .container {
        display: flex;
        width: 100%;
        flex-direction:column;
        flex-flow:row wrap;
         text-align: center; 
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .button{
        margin:20px 20px;
        width: 200px;
        height: 200px;
    }

    .scoreBoard{
        margin:40px 40px; 
    }
</style>
