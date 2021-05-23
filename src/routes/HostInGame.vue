<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }} your Vue.js App
        <pgScoreBoard></pgScoreBoard>
        <table>
              <tr>
                <th>Movie</th>
                <th>Games</th>
                <th>Physics</th>
                <th>Programming</th>
            </tr>
              <tr>
                <td>100</td>
                <td>300</td>
                <td>500</td>
                <td>1000</td>
            </tr>
              <tr>
                <td>100</td>
                <td>300</td>
                <td>500</td>
                <td>1000</td>
            </tr>
                          <tr>
                <td>100</td>
                <td>300</td>
                <td>500</td>
                <td>1000</td>
            </tr>
                          <tr>
                <td>100</td>
                <td>300</td>
                <td>500</td>
                <td>1000</td>
            </tr>

        </table>
</div>

    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
   import pgScoreBoard from '@/components/ScoreBoard.vue'
    class HostInGameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'HostInGame',
            }
        }
    }

    export default new HostInGameController('pgHostInGame',{pgScoreBoard});

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

        th {
        padding: 60px;
        text-align: center;
        background-color: #5c2ec7;
        color:aliceblue;
        }
        td
        {
        padding: 60px;
        text-align: center;
        background-color: #64b2d6;
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
