<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>
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
        <button class="button">Click Me!</button>
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
