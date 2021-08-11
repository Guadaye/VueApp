<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>
        <div v-if="gameSettingPage" class = "container">

            <h3>Name of your game:</h3><br>
            <input type="text"   v-model="gameName"><br>

            <h3>Question numbers for each catagory:</h3><br>
            <input type="text"   v-model="questionNumber" ><br>

            <h3>Catagory picked:</h3> 
            <!--
            <div v-for="(item, index) in gameList[editGameIndex].catagoryList" :key="item.catagoryName">
                <select v-model ="this.gameList[editGameIndex].catagoryList[index].catagoryName"><br>
                    <option v-for="(catagory) in this.catagoryList"  :key="catagory"> {{catagory}}  </option>                    

                </select><br>
            
            </div><br><br>
                -->
            <div v-for="(item,index) in chosenCatagoryList" :key="item.catagoryName">
            <select v-model ="chosenCatagoryList[index].catagoryName"><br>
                <option v-for="(catagory) in catagoryList"  :key="catagory"> {{catagory.newCatagoryName}}  </option>                    

            </select><br>
            </div>
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
                chosenCatagoryList:[],     
            }

            this.injectGetters(['gameList','catagoryList']);
            this.injectActions(['updateGameListVuexFire','addNewCatagoryVuexFire','bindCatagoryList','addQuestionVuexFire','bindGameList','addGameVuexFire','addGame','setGame','addNewCatagory','addQuestion','addCatagory']);
        }

        createEmptyGame(){        
            let game = new GameE(this.gameId,this.gameName, this.questionNumber, this.chosenCatagoryList);
            this.addGameVuexFire(game);
            this.editGameIndex=this.gameList.length-1;//the last/newest game in game list
            this.gameSettingPage = true;                  
        }

        editGame(){
         console.log(this.gameList);
            this.chosenCatagoryList.forEach (cata=>{                               
                for (let i = 0; i<this.gameList[this.editGameIndex].questionNumber;i++)//question number1-5
                {        
                    let question = new Question();
                    question.questionID = i+1;
                    cata.questionList.push(question);
                }                           
            })
            let idForCurrentGame = this.gameList[this.editGameIndex].id;

            let updatedGame = new GameE(this.gameId,this.gameName, this.questionNumber, this.chosenCatagoryList);
            this.updateGameListVuexFire({id:idForCurrentGame,game:updatedGame});

            this.gameSettingPage = false; 
        }

        gameSetting(index){
            this.gameSettingPage = true;
            this.editGameIndex=index;
        }

       //add all the catagory player chosen to local temp storage.
        addAnotherCatagory(){
            let catagory = new Catagory();
            this.chosenCatagoryList.push(catagory);           
        }

        catagorySubmit(){
            this.addNewCatagoryVuexFire(this.catagoryName);
            this.gameSettingPage = false;
        }
        backToLobby(){
            this.gameSettingPage = false;
        }
        editQuestions(index){
            console.log("fromEditorLobby" + index);                
            this.$router.push({name:"QuestionEditor",params:{gameId:index}});    
        }
        setActive(){
            
        }
/*


        editGame(){
              for (let i = 0; i<this.gameList[this.editGameIndex].questionNumber;i++)//question number1-5
            {        
                let question = new Question();
                let gi = this.editGameIndex; 
                let payload ={question:question,gi:gi}
                this.addQuestion(payload); 
               
           } 
             this.gameSettingPage = false;
        }

        addAnotherCatagory()
        {
            let catagory = new Catagory();
            let gi = this.editGameIndex; 
            let payload ={catagory:catagory,gi:gi}
            this.addCatagory(payload);
            this.addCatagoryToGameListVuexFire(payload);
        }
        */
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
