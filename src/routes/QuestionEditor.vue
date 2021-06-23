<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }}

            <h1>{{gameConfig.gameName}}</h1>
            <h2>Question Id:{{id}}</h2>

          <h2>Catagory:{{gameConfig.catagoryList[catagoryListIndex].catagoryName}}</h2>
          

            <form id="info-form" class="form">
            Question:<br>
            <input type="text"  v-model="gameConfig.catagoryList[catagoryListIndex].questionList[questionListIndex].question" ><br>
            Answer:<br>
            <input type="text"  v-model="gameConfig.catagoryList[catagoryListIndex].questionList[questionListIndex].answer" ><br>
            QuestionValue:<br>
            <input type="text"   v-model="gameConfig.catagoryList[catagoryListIndex].questionList[questionListIndex].scoreValue"><br>

            <input class="normal-button" type="submit"  value="Submit" >
                    
          </form>

           
          <button class="button" @click="preNextQuestion(-1)">Previous Question</button>
          <button class="button" @click="preNextQuestion(1)">Next Question</button>
        </div>


    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
 import pgbackButton from '@/components/BackButton.vue'
    class EditorLobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'QuestionEditor',
                question:"",
                answer:"",
                scoreValue:0,
                id:1,
                catagoryListIndex:0,
                questionListIndex:0,
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
            preNextQuestion(page)
            {
                if(page<0){//去上一题
                    if(this.questionListIndex+page<0){//如果题目在最开头了
                        if(this.catagoryListIndex+page>=0){ //如果不是最开头的类
                            this.catagoryListIndex--;//去到上一个类
                            this.questionListIndex=this.gameConfig.catagoryList[this.catagoryListIndex].questionList.length-1;
                        }
                        //如果是最开头的类不做事
                    }
                    else{
                        this.questionListIndex--;//不在最开头，减题目
                    }    
                }
                else{
                    if(this.questionListIndex+page+1>this.gameConfig.catagoryList[this.catagoryListIndex].questionList.length){//如果题目在最末尾了
                        if(this.catagoryListIndex+page+1<=this.gameConfig.catagoryList.length){ //如果不是最后一个类
                            this.catagoryListIndex++;//去到下一个类
                            this.questionListIndex=0;
                        }                 
                    }
                    else{
                        this.questionListIndex++;//不在最末，加题目
                    }     
                }
            }

    }

    export default new EditorLobbyController('pgQEditorLobby',{pgbackButton});

</script>
<style scoped>
/* Local styles for this template */
    .container {
        display: flex;
        width: 100%;
        flex-direction:column;
        flex-flow:row wrap;
         text-align: center; 
    }

    .about {
        margin:2vw;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>
