<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>


    <section class="container">
        <div v-if="gameSettingPage" class = "container">

            <form @submit.prevent = "createNewGame()"  class="form">
                    <label>Name of your game:</label><br>
                    <input type="text"  value="Game1" v-model="gameName"><br>

                    <label>Question numbers for each catagory:</label><br>
                    <input type="text"  value="4" v-model="questionNumber" ><br>

                    <label>Catagory picked:</label> <button @click="addAnotherCatagory">Add</button>
                    <div v-for="item in chosenCatagoryList" :key="item.catagoryName">

                        <select v-model ="chosenCatagoryName"><br>
                            <option v-for="catagory in catagoryList"  :key="catagory.catagoryName"> {{catagory.catagoryName}}  </option>    
                        </select><br>
                        
                    </div>

                
                    <input type="submit"  value="Create Game!" >
  
            </form>
        </div>

        <div v-else class="about">{{ name }}
            <h1>Choose a game to edit</h1>
            <div class = "game-list">
                
                   <div v-for="game in gameList" :key ="game.name" class="game-item">
                        <span>game1</span>
                        <button class="" @click="gameSetting(name)">Edit Game Settings</button>
                        <button @click="editQuestions">Edit Questions</button>
                        <button @click="setActive">Set Active</button>
                   </div>
                        <button @click="gameSetting()">Create a new game!</button>
            </div>
         
                <br><br>
                <br><br>


                <form @submit.prevent = "catagorySubmit" class="form">

                    <label>Add a new catagory:</label>
                    <input type="text"  v-model="catagoryName" ><br>
                    <input type = "submit" value = "submit">        
                </form>

        </div>
    </section>
</template>


<script>
    import Controller from '@/mixins/controller'
    import GameE from '@/model/Game.js'
    import Question from '@/model/Question.js'
    import Catagory from '@/model/Catagory.js'
    class EditorLobbyController extends Controller {
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {

                currentGame:[],
                gameList:[],
                gameName: "",
                questionNumber : 4,
                chosenCatagoryList:[],
                chosenCatagoryName: "",
                catagoryName: "",
                catagoryList:[
                    {catagoryName: "science", questionList:[{question:"what is the color of apple?",answer:"red",scoreValue:200}]},
                    {catagoryName: "animat", questionList:[{question:"what is the color of banana?",answer:"yellow",scoreValue:300}]}
                ],

                name: 'Editor Lobby',
                gameSettingPage : false,
            }
        }

        createNewGame(){
            console.log("game");
            
            //for循環是循環key
            let obj={name:"mm",age:12}
            for (let key in obj) {
               console.log("key:"+key)
               console.log("value:"+obj[key])
            }
            //數組for循環是循環index 索引
            for (let index in this.chosenCatagoryList)
            {        
                let cate=this.chosenCatagoryList[index];
                for(let i = 0; i<this.questionNumber; i++)
                {
                    let question = new Question();
                    cate.questionList.push(question);
                }
           } 
            let game = new GameE(this.gameName, this.questionNumber, this.chosenCatagoryList);
            this.gameList.push(game);
            this.gameSettingPage = false;            
        }

        gameSetting(GameE){
            this.gameSettingPage = true;
        }

        addAnotherCatagory()
        {
              console.log("add");
            let catagory = new Catagory();
            this.chosenCatagoryList.push(catagory);
        }
        catagorySubmit(){
            console.log("submit");
            this.catagoryList.push(this.catagoryName);
            this.gameSettingPage = false;
        }
        backToLobby(){
            this.gameSettingPage = false;
        }
        editQuestions(){
            this.$router.push("/QuestionEditor");
        }
        setActive(){
            
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
    
    .game-item button{
        margin: 10px;
    }
</style>
