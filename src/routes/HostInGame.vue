<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


  <div class="container">

<!--    <div class="about">{{ name }} your Vue.js App
      <pgScoreBoard>sasad</pgScoreBoard>
      <div class="box"></div>
    </div>-->

    <div class="point">Team A: 20 point</div>
    <div class="point">Team B: 30 point</div>
    <div class="cate-name">President</div>
    <div class="cate-name">Flower</div>
    <div class="cate-name">Food</div>
    <div class="cate-name">Science</div>
    <div class="question">200</div>
    <div class="question">200</div>
    <div class="question">200</div>
    <div class="question">200</div>

    <div class="question">300</div>
    <div class="question">300</div>
    <div class="question">300</div>
    <div class="question">300</div>

    <div class="question">400</div>
    <div class="question">400</div>
    <div class="question">400</div>
    <div class="question">400</div>

  </div>

</template>
<script>
import Controller from '@/mixins/controller'
import pgScoreBoard from '@/components/ScoreBoard.vue'

class HostInGameController extends Controller {

  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      name: 'HostInGame',
    }
  }
}

export default new HostInGameController('pgHostInGame', {pgScoreBoard});

</script>
<style scoped>
/* Local styles for this template */
.container {
  display: flex;
  width: 1200px;
  padding: 0 10% 0 10%;
  flex-direction: column;
  flex-flow: row wrap;
  text-align: center;
  background: indianred;
  text-align: center;
}
.container div{
  /*todo 測試*/
   background: indianred;
   height: 50px;
  border: 1px solid black;
}

.point{
  width: 45%;
}
.cate-name{
  width: 20%;
}
.question{
  width: 20%;
  border: 1px solid black;
  line-height: 50px;
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
