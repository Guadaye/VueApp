<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }}
            <h1>Choose a game to edit</h1>
            <div class = "table">
                <li v-for="game in gameList" :key ="game.name">
                    
                    <div class = game-info>
                        <div>{{game.name}}</div>
                        <button @click="submit">Edit Game Settings</button>
                        <button @click="submit">Edit Questions</button>
                    </div>

                </li>
            </div>
                 <button @click="createNewGame()">Create a new game!</button>

                <br><br>
                <br><br>
                <form id="info-form" class="form">
                    Add a new catagory:<br>
                    <input type="text" name="levelName" value="level1" /><br>
                    <input type="submit" name="action" value="Submit" />
                </form>

        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import Game from '@/model/Game.js'
    class EditorLobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                gameList:[],
                name: 'Editor Lobby',
            }
        }

        createNewGame()
        {
            let game = new Game();
            gameList.push(game);
        }
    }

    export default new EditorLobbyController('pgQEditorLobby');

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
    .table{
        
        width:50%;
        text-align: center;
    }
</style>
