<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2018.Haojun All Rights Reserved.
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

    }
      this.injectGetters(['inQuestionPage','currentGameIndex']);
     this.injectActions(['playerJoin','fightAnswer','connect']);
  }

  submit() {
    if(!this.name){
      alert("please input name")
      return;
    }
    if(this.currentGameIndex>=0)
    {
    this.playerJoin(this.name);
    this.isSplash=false;
    
    }
    else
         alert("game hasn't started yet");
        this.connect();
  }

  tapToFightAnswer(){
    if(this.inQuestionPage)
    {
        this.fightAnswer(this.name);
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
