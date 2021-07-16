<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>
        <div v-if="gameSettingPage" class = "container">

             
                    <h3>Name of your game:</h3><br>
                    <input type="text"   v-model="gameList[editGameIndex].gameName"><br>

                    <h3>Question numbers for each catagory:</h3><br>
                    <input type="text"   v-model="gameList[editGameIndex].questionNumber" ><br>

                    <h3>Catagory picked:</h3> 
                    <div v-for="(item, index) in gameList[editGameIndex].catagoryList" :key="item.catagoryName">

                        <select v-model ="gameList[editGameIndex].catagoryList[index].catagoryName"><br>
                            <option v-for="(catagory) in catagoryList"  :key="catagory"> {{catagory}}  </option>                    

                        </select><br>
                        
                    </div><br><br>
                             <button @click="addAnotherCatagory">Add</button><br> 
                    <input class="normal-button" type="submit" @click="editGame" value="Create Game!" >                          
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
                        <button class = "createBtn" @click="createEmptyGame()">Create a new game!</button>
            </div>       
                <br><br>
                <br><br>

                <form @submit.prevent = "catagorySubmit" class="form">

                    <h3>Or...Add a new catagory:</h3>
                    <input type="text"  v-model="catagoryName" ><br>
                    <input class="normal-button" type = "submit" value = "submit">        
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
                catagoryName: "",
                name: 'Editor Lobby',
                gameSettingPage : false,
                editGameIndex:0,
      
            }

            this.injectGetters(['gameList','catagoryList']);
            this.injectActions(['addCatagoryToGameListVuexFire','addNewCatagoryVuexFire','bindCatagoryList','addQuestionVuexFire','bindGameList','addGameVuexFire','addGame','setGame','addNewCatagory','addQuestion','addCatagory']);


        }
        createEmptyGame(){

            this.bindGameList();
            let game = new GameE(this.gameId,this.gameName, this.questionNumber, this.chosenCatagoryList);
            this.addGame(game);
            this.addGameVuexFire(game);
            this.editGameIndex=this.gameList.length-1;//the last/newest game in game list
            this.gameSettingPage = true;
             
        }

        editGame(){
              for (let i = 0; i<this.gameList[this.editGameIndex].questionNumber;i++)//question number1-5
            {        
                let question = new Question();
                let gi = this.editGameIndex; 
                let payload ={question:question,gi:gi}
                this.addQuestion(payload); 
                //addQuestionVuexFire(payload);   
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
            this.addCatagoryToGameListVuexFire(payload);
        }
        catagorySubmit(){
            console.log("submit");
          //  this.addNewCatagory(this.catagoryName);
            this.addNewCatagoryVuexFire(this.catagoryName);
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
  padding: 10px 25% 10px 25%;
  /*background: indianred;*/
  text-align: center;

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
    
    .createBtn{
        background-color: ghostwhite;
        
    }
</style>
