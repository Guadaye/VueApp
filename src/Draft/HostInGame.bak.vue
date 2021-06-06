<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


  <div @click="test" class="container">

<!--    <div class="about">{{ name }} your Vue.js App
      <pgScoreBoard>sasad</pgScoreBoard>
      <div class="box"></div>
    </div>-->

    <pg-score-board></pg-score-board>

  <div v-for="catagory in catagoryList" :key ="catagory.name">
      <div  class="cate-name">{{}}</div>
  </div> 
  <div v-for ="catagory in catagoryList" :key ="catagory.name">
  <div v-for="catagory in catagoryList" :key ="catagory.name">
      <div  class="cate-name">{{}}</div>
  </div> 



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

    <div class="question">1000</div>
    <div class="question">1000</div>
    <div class="question">1000</div>
    <div class="question">1000</div>

    <div class="question">1000</div>
    <div class="question">1000</div>
    <div class="question">1000</div>
    <div class="question">1000</div>

  </div>

</template>
<script>
import Controller from '@/mixins/controller'
import ScoreBoard from '@/components/ScoreBoard.vue'

class HostInGameController extends Controller {

  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      name: 'HostInGame',
      
    }
  }
  test(){
    console.log(111)
  }
}

export default new HostInGameController('pgHostInGame', {ScoreBoard});

</script>
<style scoped>
/* Local styles for this template */
.container {
  display: flex;
  width: 1200px;
  padding: 0 25% 0 25%;
  flex-flow: row wrap;
  text-align: center;
  /*background: indianred;*/
  text-align: center;
  justify-content: space-between;/*横向轴线*/
  align-content:flex-start;/*纵向轴线*/
  color: black;
}
.container div{
  line-height: 50px;
}

.point{
  border: 1px solid black;
  margin-top: 30px;
  width: 45%;
}
.cate-name{
  line-height: 50px;
  height: 50px;
  margin-top: 50px;
  width: 20%;
  margin-bottom: -20px;
}
.question{
  margin-top: 10px;
  /*width: 10%;*/
  border: 1px solid black;
  line-height: 50px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 20%;

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
