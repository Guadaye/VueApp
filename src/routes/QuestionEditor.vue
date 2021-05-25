<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }}

            <h1>Game1</h1>
            <h2>Question1</h2>
          Catagory:<br>
          <select id="catagory" name="catagory">
            <option value=""> </option>
          </select><br />

            <form id="info-form" class="form">
            Question:<br>
            <input type="text" name="Question" value="" /><br>
            Answer:<br>
            <input type="text" name="Answer" value="" /><br>
            QuestionValue:<br>
            <input type="text" name="QuestionValue" value="" /><br>

            <input type="submit" name="action" value="Submit" />

          </form>
          <button class="button">Previous Question</button>
          <button class="button">Next Question</button>
          <button class="button">Delete Current Question</button>
        </div>


    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    class EditorLobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Editor Lobby',
            }
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
</style>
