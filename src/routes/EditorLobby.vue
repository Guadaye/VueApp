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
                <table>
                    <tr>
                        <th>Game1</th>
                        <th><Button>Edit Game Settings</Button></th>
                        <th><Button>Edit Questions</Button></th>
                    </tr>
                </table>
            </div>
                <Button>Create a new game</Button>

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
</style>
