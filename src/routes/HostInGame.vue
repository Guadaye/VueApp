<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <div v-if="localInGameStatus[1].inQuestionPage" class = "container">
        <div class = "back">
            <button @click="backToQuestionBoard">back</button>
        </div>
             <score-board> </score-board> 
        <div >Question: {{question}}</div>
        <div >Answer: {{answer}}</div>
        <div >ScoreValue: {{scoreValue}}</div>
        <div class="playerBoard">
            <div v-for="player in playerBuzzQueue" :key = "player.name">
              <span>{{player.name}}</span>
              <button v-if="player.itsTurn" @click="addPoint(1, player)">Add Point</button>
              <button v-if="player.itsTurn" @click="addPoint(-1,player)">Deduct Point</button>
            </div>
        </div>
    </div>

    <div v-else class="container">
      <pgbackButton></pgbackButton>
        <score-board></score-board>  
      <div  class="questionBoard">           
          <div v-for="catagoryIndex in gameList[localInGameStatus[0].pickedGameId].catagoryList" :key="catagoryIndex.catagoryName" class="catagory">
              <div  class="cate-name">{{catagoryIndex.catagoryName}}</div>

              <div  v-for="questionIndex in catagoryIndex.questionList " :key="questionIndex.answer">
                  <button class="question"  :class="questionIndex.answered ==true?'invisible':''"  @click="goToQuestion(questionIndex.questionID)"  >{{questionIndex.scoreValue}}</button>
              </div>
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
      inQuestionLobby: true,
      scoreValue:0,
     
    }
      this.injectGetters(['gameList','localInGameStatus','playerBuzzQueue','teamConfig','inQuestionPage']);
      this.injectActions(['setCurrentAnsweringQuestionID','inQuestionVuexFire','changePointVueFire',
                          'setAnswered','inQuestion','changeQueueTurn','changeQueueStatusVuexFire','fightAnswerVuexFire']);
  }

  addPoint(addedScore,player){   
        if(addedScore>0){
          let newScore =this.teamConfig[(player.team)-1].score+addedScore*this.scoreValue;
          this.changePointVueFire({score: newScore,teamNum:player.team});
          this.backToQuestionBoard();
        }
        else{
          let newScore =this.teamConfig[(player.team)-1].score+addedScore*this.scoreValue;
          this.changePointVueFire({score: newScore,teamNum:player.team});
            //playerBuzzQueue[sequence].itsTurn=true;
            let nextPlayer = this.playerBuzzQueue[player.sequence];
            this.changeQueueTurn({playerInfo:player,itsTurn:false});
            this.changeQueueTurn({playerInfo:nextPlayer,itsTurn:true});
        }
    }
  
  goToQuestion(id)
  {   
      this.setCurrentAnsweringQuestionID(id);

      for (let index in this.gameList[this.localInGameStatus[0].pickedGameId].catagoryList){
        console.log("incatagoryList");
        let cate=this.gameList[this.localInGameStatus[0].pickedGameId].catagoryList[index];  
        for(let questionIndex in cate.questionList){            
         let question=cate.questionList[questionIndex]; 
          if (question.questionID == id){
            this.question = question.question;
            this.answer = question.answer;
            this.scoreValue = question.scoreValue;
          }       
        }
      }   
            this.inQuestionVuexFire(true);   
  }

  backToQuestionBoard()
  {
      this.inQuestionVuexFire(false); 
      
      for(let i=0; i<3;i++){    
        let localPlayerInfo ={name:"",team:1,playerId:-1}
        //clear buzz queue
        this.changeQueueStatusVuexFire({playerInfo:localPlayerInfo,sequence:i+1});                   
      };      
      //this.setAnswered();
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
  color:white;
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
  height: 60px;
  border: 1px solid black;
  line-height: 40px;
  margin-top: 10px;
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
.invisible{
   visibility: hidden;
}
    .normal-button{
    width: auto;
    height: 50px;
    border-radius: 7px;
    background-color: #21aa56;
        font-weight: 700;
            padding: 0.5em;
    color: #53488d;
}
</style>
