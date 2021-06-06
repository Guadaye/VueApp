<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>
-->
<template>


  <div>
    <div v-if="isSplash" class="container">
      <h2>Your Nickname is?</h2>
      <input v-model="name" placeholder="nickname" type="text">
      <button @click="submit">submit</button>
    </div>

      <div v-else class="container">
        <pgScoreBoard></pgScoreBoard>
        <h1> Team1 Player: {{name}}</h1>
        <button class="button">Click Me!</button>
    </div>
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
  }

  submit() {
    if(!this.name){
      alert("please input name")
      return;
    }
    this.isSplash=false;
  }
}

export default new PlayerInGameController('pgPlayerInGame', {pgScoreBoard});

</script>
<style scoped>
/* Local styles for this template */
.container {

  display: flex;
  width: 800px;
  padding: 10% 25% 0 25%;
  flex-flow: column wrap;
  text-align: center;
  /*background: indianred;*/
  text-align: center;
  justify-content: space-around; /*横向轴线*/
  align-content: flex-start; /*纵向轴线*/
  color: black;

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
