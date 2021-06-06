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
          <div v-for="catagoryIndex in gameConfig.catagoryList" :key="catagoryIndex.catagoryName" class="catagory">
              <div  class="cate-name">{{catagoryIndex.catagoryName}}</div>
              <button @click="goToQuestion(questionIndex.id)" v-for="questionIndex in catagoryIndex.questionList" :key="questionIndex.answer" class="question">{{questionIndex.scoreValue}}</button>
          </div>     
      </div>
    </div>


    <div v-else class = "container">
        <div class = "back">
            <button @click="backToLobby">back</button>
        </div>
             <score-board></score-board> 
        <div > {{question}}</div>
        <div > {{answer}}</div>


        <div class="playerBoard">
            <div v-for="player in playerConfig" :key = "player.name">
              <span>{{player.name}}</span>
              <button v-if="player.itsTurn" @click="addPoint(scoreValue, player.id)">Add Point</button>
              <button v-if="player.itsTurn" @click="addPoint(-scoreValue,player.id)">Deduct Point</button>
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
      gameConfig:  {
        gameName: "game1",
        questionNumber: 2,
        catagoryList :[
                        {catagoryName: "science", 
                        questionList:[{
                                      id:1,
                                      question:"what is the color of apple?",
                                      answer:"red",
                                      scoreValue:200},
                                      {
                                        id:2,
                                        question:"what is the color of bababa?",
                                      answer:"red",
                                      scoreValue:200}]},
                       {catagoryName: "anime", 
                        questionList:[{
                                        id:3,
                                        question:"what is the color of ccc?",
                                        answer:"red",
                                        scoreValue:200},
                                       {
                                         id:4,
                                         question:"what is the color of ddd?",
                                         answer:"red",
                                         scoreValue:200}]},
                       {catagoryName: "animal", 
                        questionList:[{
                                       id:5,
                                       question:"what is the color of rrr?",
                                       answer:"red",
                                       scoreValue:200},
                                       {
                                        id:6,
                                        question:"what is the color of sss?",
                                        answer:"red",
                                        scoreValue:200}]}
                      ]
      }
    }
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
              //TODO: GET RID OF BUTTON
            }
            else{
              for(let pcindex in this.playerConfig){
                let pcPlayer = this.playerConfig[pcindex];
                if(pcPlayer.id==id){
                    console.log(this.playerConfig[pcindex++].itsTurn);
                    pcPlayer.itsTurn=false;                  

                    this.playerConfig[pcindex++].itsTurn=true;
                    }
                }
              }     
            }
          }
        }
      }
  

  goToQuestion(id)
  {
      for (let index in this.gameConfig.catagoryList){
        console.log("incatagoryList");
        let cate=this.gameConfig.catagoryList[index];  
        for(let questionIndex in cate.questionList){            
         let question=cate.questionList[questionIndex]; 
          if (question.id == id){
            this.question = question.question;
            this.answer = question.answer;
            this.scoreValue = question.scoreValue;
          }       
        }
        this.inQuestionLobby = false;   
      }   
  }
  backToLobby() {
      this.inQuestionLobby= true;
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
