<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>
        <div v-if="gameSettingPage" class = "container">

            <form @submit.prevent = "editGame"  class="form">
                    <h2>Name of your game:</h2><br>
                    <input type="text"   v-model="gameList[editGameIndex].gameName"><br>

                    <h2>Question numbers for each catagory:</h2><br>
                    <input type="text"   v-model="gameList[editGameIndex].questionNumber" ><br>

                    <h2>Catagory picked:</h2> 
                    <div v-for="(item, index) in gameList[editGameIndex].catagoryList" :key="item.catagoryName">

                        <select v-model ="gameList[editGameIndex].catagoryList[index].catagoryName"><br>
                            <option v-for="(catagory) in catagoryList"  :key="catagory"> {{catagory}}  </option>                    

                        </select><br>
                        
                    </div><br><br>
                
                    <input type="submit"  value="Create Game!" >
            </form>

                    <button @click="addAnotherCatagory">Add</button><br> 
        </div>

        <div v-else class="container">{{ name }}
            <pgbackButton></pgbackButton>
            <h1>Choose a game to edit</h1>
            <div class = "game-list">
                
                   <div v-for="(game,index) in gameList" :key ="game.name" class="game-item">
                        <span>{{game.gameName}}</span>
                        <button  @click="gameSetting(index)">Edit Game Settings</button>
                        <button  @click="editQuestions(index)"  >Edit Questions</button>
                        <button  @click="setActive">Set Active</button>
                   </div>
                        <button @click="createEmptyGame()">Create a new game!</button>
            </div>       
                <br><br>
                <br><br>

                <form @submit.prevent = "catagorySubmit" class="form">

                    <h2>Add a new catagory:</h2>
                    <input type="text"  v-model="catagoryName" ><br>
                    <input type = "submit" value = "submit">        
                </form>
        </div>
</template>


<script>
    import Controller from '@/mixins/controller'
    import GameE from '@/model/Game.js'
    import Question from '@/model/Question.js'
    import Catagory from '@/model/Catagory.js'
    import pgbackButton from '@/components/BackButton.vue'
    class EditorLobbyController extends Controller {
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                questionNumberInTotal:0,
                gameId:0,
                currentGame:[],
                gameName: "",
                questionNumber : 4,
          //      chosenCatagoryList:[],
           //     chosenCatagoryName: "",
                catagoryName: "",
                name: 'Editor Lobby',
                gameSettingPage : false,
                editGameIndex:0,
      
            }

            this.injectGetters(['gameList','catagoryList']);
            this.injectActions(['addGame','setGame','addNewCatagory','addQuestion','addCatagory']);
        }
        createEmptyGame(){
            let game = new GameE(this.gameId,this.gameName, this.questionNumber, this.chosenCatagoryList);
       //     this.setGame(game);
            this.addGame(game);
            this.editGameIndex=this.gameList.length-1;
             this.gameSettingPage = true;
             
        }


        editGame(gi){
              for (let i = 0; i<this.gameList[this.editGameIndex].questionNumber;i++)
            {        
                let question = new Question();
                let gi = this.editGameIndex; 
                let payload ={question:question,gi:gi}
                this.addQuestion(payload);
    
           } 
             this.gameSettingPage = false;
        }

        gameSetting(index){
            this.gameSettingPage = true;
            this.editGameIndex=index;
        }

        addAnotherCatagory()
        {
            let catagory = new Catagory();
            let gi = this.editGameIndex; 
            let payload ={catagory:catagory,gi:gi}
            this.addCatagory(payload);
        }
        catagorySubmit(){
            console.log("submit");
            this.addNewCatagory(this.catagoryName);
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

    export default new EditorLobbyController('pgQEditorLobby',{pgbackButton});

</script>

<style scoped>
/* Local styles for this template */
    .container {
  width: 1200px;
  padding: 0 25% 0 25%;
  /*background: indianred;*/
  text-align: center;
  color: black;
  margin-top:100px;
   font-family: 'Montserrat', sans-serif;
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
