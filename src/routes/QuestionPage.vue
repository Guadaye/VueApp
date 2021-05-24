<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }} 

        <pgScoreBoard></pgScoreBoard>

        <div class = "question"> Question1: What is the longest river in the world?</div>
        <table>
            <tr>
                <th>Player1</th>
                <th></th>

            </tr>
            <tr>
                <th>Player2</th>
                <th></th>

            </tr>
            <tr>
                <th>Player3</th>
                <th></th>

            </tr>
            <tr>
                <th>Player4</th>
                <th></th>

            </tr>
        </table>

        </div>
    
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import pgGivePointsButton from'@/components/GivePointsButton.vue'
     import pgScoreBoard from '@/components/ScoreBoard.vue'

    class QuestionPageController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'QuestionPage',
            }
        }
    }

    export default new QuestionPageController('pgQuestionPage',{pgGivePointsButton,pgScoreBoard});

</script>
<style scoped>
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
</style>
