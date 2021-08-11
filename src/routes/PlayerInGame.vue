<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <div v-if="isSplash" class="container">
      <h2>Your Nickname is?</h2>
      <input v-model="name" placeholder="nickname" type="text">
      <button @click="submit">submit</button>
    </div>

      <div v-else class="container">
        <pgScoreBoard></pgScoreBoard>
        <h1> Team1 Player: {{name}}</h1>
        <button @click="tapToFightAnswer" class="button">Click Me!</button>
    </div>


</template>
<script>
import Controller from '@/mixins/controller'
import pgScoreBoard from '@/components/ScoreBoard.vue'

class PlayerInGameController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      name: '',
      isSplash:true,
      myId:-1,
      signedInAlready:false,
    }
    this.injectGetters(['playerinHostLobbyList','inQuestionPage','currentGameIndex','localInGameStatus','playerBuzzQueue']);
    this.injectActions(['playerJoin','playerJoinVuexFire','fightAnswer','connect','fightAnswerVuexFire']);
  }

  submit() {
    if(!this.name){
      alert("please input name");
      return;
    }
    if(this.localInGameStatus[0].GameOn==true){
      for(let i = 0; i<this.playerinHostLobbyList.length;i++){
          if(this.playerinHostLobbyList[i].name==""){
             //local: this.playerinHostLobbyList.name =this.name;

             //keep a local id for player to identify itself
              this.myId = i+1;
              this.playerJoinVuexFire({id:i+1,name:this.name,team:-1});
              console.log("Succesfully joined");
                    this.isSplash=false;  
                  
              return;
            }
          }
      }
      //TODO: NOTE IF LIST IF FULL
       // this.playerJoinVuexFire(this.name);  
    
    else{
        alert("game hasn't started yet");     
    }
  }

  tapToFightAnswer(){
      if(this.localInGameStatus[1].inQuestionPage){

         for(let i = 0; i<this.playerinHostLobbyList.length;i++){
            if(this.playerBuzzQueue[i].name==""){
                let myInfo = this.playerinHostLobbyList[this.myId-1];
              // this.fightAnswer(this.name);          
                this.fightAnswerVuexFire({playerInfo:myInfo,sequence:i+1});
                console.log(myInfo);
                return;
            }
          }
      }
  }
}

export default new PlayerInGameController('pgPlayerInGame', {pgScoreBoard});

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

.container input {
  margin-top: 100px;
}

.container button {
  width: 80px;
  margin: 100px auto;
}

.button {
  margin: 20px 20px;
  width: 200px;
  height: 200px;
}

.scoreBoard {
  margin: 40px 40px;
}
</style>
