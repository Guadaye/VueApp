<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <div v-if="inQuestionLobby" class="container">
      <pgbackButton></pgbackButton>
      <score-board></score-board> 
      <div   class="questionBoard">                    
          <div v-for="catagoryIndex in gameList[currentGameIndex].catagoryList" :key="catagoryIndex.catagoryName" class="catagory">
              <div  class="cate-name">{{catagoryIndex.catagoryName}}</div>
              <div class="question" v-for="questionIndex in catagoryIndex.questionList " :key="questionIndex.answer">
              <button v-if="questionIndex.answered ==false" @click="goToQuestion(questionIndex.questionID)"  >{{questionIndex.scoreValue}}</button>
              </div>
          </div>     
      </div>
    </div>


    <div v-else class = "container">
        <div class = "back">
            <button @click="backToQuestionBoard">back</button>
        </div>
             <score-board></score-board> 
        <div > {{question}}</div>
        <div > {{answer}}</div>


        <div class="playerBoard">
            <div v-for="player in playerBuzzQueue" :key = "player.name">
              <span>{{player.name}}</span>
              <button v-if="player.itsTurn" @click="addPoint(scoreValue, player.queueID)">Add Point</button>
              <button v-if="player.itsTurn" @click="addPoint(-scoreValue,player.queueID)">Deduct Point</button>
            </div>
        </div>
    </div>


</template>


<script>
import Controller from '@/mixins/controller'
import ScoreBoard from '@/components/ScoreBoard.vue'
import pgbackButton from '@/components/BackButton.vue'
class HostInGameController extends Controller {

  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      name: 'HostInGame',
      id:null,
      question:"",
      answer:"",
      scoreValue:null,
      playerConfig:[{id:1,name:"player1",team:1,itsTurn:true},
                    {id:2,name:"player2",team:2,itsTurn:false},
                    {id:3,name:"player3",team:1,itsTurn:false},
                    {id:4,name:"player4",team:2,itsTurn:false}],

      teamConfig:[{name:"team1",score:0,playerid:[1,3]},
                  {name:"team2",score:0,playerid:[2,4]}],
      inQuestionLobby: true,
     
    }

      this.injectGetters(['gameList','currentGameIndex','playerBuzzQueue']);
      this.injectActions(['clearPlayerBuzz','setCurrentAnsweringQuestionID','setAnswered']);
  }
  addPoint(scoreValue,id)
  {

      for (let index in this.teamConfig){        
        let team=this.teamConfig[index];  
        for(let players in team.playerid){                
         let player=team.playerid[players]; 
          if (player == id){
            team.score+=scoreValue;
            if(scoreValue>=0){
              this.inQuestionLobby= true;
              this.clearPlayerBuzz();
              this.setAnswered();
    
            }
            else{
              for(let pcindex in this.playerBuzzQueue){
                let pcPlayer = this.playerBuzzQueue[pcindex];
                if(pcPlayer.queueID==id){
                    console.log(this.playerBuzzQueue[pcindex++].itsTurn);
                    pcPlayer.itsTurn=false;                  

                    this.playerBuzzQueue[pcindex++].itsTurn=true;
                    }
                }
              }     
            }
          }
        }
      }

  goToQuestion(id)
  {   
      this.setCurrentAnsweringQuestionID(id);

      for (let index in this.gameList[this.currentGameIndex].catagoryList){
        console.log("incatagoryList");
        let cate=this.gameList[this.currentGameIndex].catagoryList[index];  
        for(let questionIndex in cate.questionList){            
         let question=cate.questionList[questionIndex]; 
          if (question.questionID == id){
            this.question = question.question;
            this.answer = question.answer;
            this.scoreValue = question.scoreValue;
          }       
        }
        this.inQuestionLobby = false;   
      }   
  }

  backToQuestionBoard() {
      this.inQuestionLobby= true;
      this.setAnswered();
  }

}

export default new HostInGameController('pgHostInGame', {ScoreBoard,pgbackButton});

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
.questionBoard{
  margin-top: 20px;
  text-align: center;
}
.catagory{
  display: inline-block;
  width: 80px;
  margin-left: 30px;
}
.question{
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  color: #fff;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  line-height: 40px;
  margin-top: 20px;
  font-weight: 700;
    border-color: #3498db;
    
}
.back{
  text-align:left;
}

.about {
  margin: 2vw;
  border: 1px solid black;
  background-color: lightgray;
  color: black;
  height: 78vh;
  width: 80vw;
}
</style>
