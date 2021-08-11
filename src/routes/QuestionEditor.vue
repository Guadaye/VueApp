<!--
VFS VUE Single File Component

<pgQuestionEditor name="User"></pgQuestionEditor>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }}

            <h1>{{gameList[$route.params.gameId].gameName}}</h1>
 
            <h2>Question Id:{{gameList[$route.params.gameId].catagoryList[this.catagoryListIndex].questionList[questionListIndex].questionID}}</h2>
                
          <h2>Catagory:{{gameList[$route.params.gameId].catagoryList[catagoryListIndex].catagoryName}}</h2>
          

            <form id="info-form" class="form">
            Question:<br>
            <input type="text"  v-model="gameList[$route.params.gameId].catagoryList[catagoryListIndex].questionList[questionListIndex].question" ><br>
            Answer:<br>
            <input type="text"  v-model="gameList[$route.params.gameId].catagoryList[catagoryListIndex].questionList[questionListIndex].answer" ><br>
            QuestionValue:<br>
            <input type="text"   v-model="gameList[$route.params.gameId].catagoryList[catagoryListIndex].questionList[questionListIndex].scoreValue"><br>

            <input class="normal-button" type="submit" @click="submit" value="Submit" >
           
                    
          </form>
                <!--    -->
           
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
            }
            this.params ={
                gameId: 0,
            }

            this.injectGetters(['gameList','currentGameIndex',]);
            this.injectActions(['updateQuestionVuexFire','updateGameListVuexFire']);
         
        }
            preNextQuestion(page)
            {
                if(page<0){//去上一题
                    if(this.questionListIndex+page<0){//如果题目在最开头了
                        if(this.catagoryListIndex+page>=0){ //如果不是最开头的类
                            this.catagoryListIndex--;//去到上一个类
                            this.questionListIndex=this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList.length-1;
                        }
                        //如果是最开头的类不做事
                    }
                    else{
                        this.questionListIndex--;//不在最开头，减题目
                    }    
                }
                else{
                    if(this.questionListIndex+page+1>this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList.length){//如果题目在最末尾了
                        if(this.catagoryListIndex+page+1<=this.gameList[this.$route.params.gameId].catagoryList.length){ //如果不是最后一个类
                            this.catagoryListIndex++;//去到下一个类
                            this.questionListIndex=0;
                        }                 
                    }
                    else{
                        this.questionListIndex++;//不在最末，加题目
                    }     
                }
            }
            submit()  //TODO: MAYBE STORE DATA LOCALLY AND THEN SUBMIT AFTER ALL THE QUESTIONS ARE FILLED
            {
                let fireStoreIdForCurrentGame = this.gameList[this.$route.params.gameId].id;

                let updatedQuestion = this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList[this.questionListIndex];
                updatedQuestion.answer = this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList[this.questionListIndex].answer;
                updatedQuestion.question = this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList[this.questionListIndex].answer;
                updatedQuestion.scoreValue = this.gameList[this.$route.params.gameId].catagoryList[this.catagoryListIndex].questionList[this.questionListIndex].scoreValue;
                
                this.updateGameListVuexFire({id:fireStoreIdForCurrentGame,game:this.gameList[this.$route.params.gameId]});
                
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
