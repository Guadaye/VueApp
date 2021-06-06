<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


  <div @click="test" class="container">

    <score-board></score-board>
 
    <div   class="questionBoard">   
                 
        <div v-for="catagoryIndex in gameConfig.catagoryList" :key="catagoryIndex.catagoryName" class="catagory">
            <div  class="cate-name">{{catagoryIndex.catagoryName}}</div>
              <!--  question for循环问题  -->
            <button v-for="questionIndex in catagoryIndex.questionList" :key="questionIndex.answer" class="question">{{questionIndex.scoreValue}}</button>

        </div>
       
    </div>

    
  
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
      gameConfig:  {
        gameName: "game1",
        questionNumber: 2,
        catagoryList :[
                        {catagoryName: "science", 
                        questionList:[{question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200},
                                       {question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200}]},
                       {catagoryName: "anime", 
                        questionList:[{question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200},
                                       {question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200}]},
                       {catagoryName: "animal", 
                        questionList:[{question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200},
                                       {question:"what is the color of apple?",
                                       answer:"red",
                                       scoreValue:200}]}
                      ]
    }
  }
  }

  test()
  {
    console.log(111)
  }
}

export default new HostInGameController('pgHostInGame', {ScoreBoard});

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


.about {
  margin: 2vw;
  border: 1px solid black;
  background-color: lightgray;
  color: black;
  height: 78vh;
  width: 80vw;
}
</style>
