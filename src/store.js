import Vue from 'vue'
import Vuex from 'vuex'
import GameE from '@/model/Game.js'
import Question from '@/model/Question.js'
import Catagory from '@/model/Catagory.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startHosting:false,
    inQuestionPage:false,
    currentGameIndex:-1,  
    currentAnsweringQuestionID:0,
    gameList:[     
    {gameName: "game1",
      questionNumber: 2,
      catagoryList :[
                      {catagoryName: "science", 
                      questionList:[{
                                    questionID:1,
                                    answered:false,
                                    question:"what is the color of apple?",
                                    answer:"red",
                                    scoreValue:200},
                                    {
                                      questionID:2,
                                      question:"what is the color of bababa?",
                                      answered:false,
                                      answer:"red",
                                    scoreValue:200}]},
                     {catagoryName: "anime", 
                      questionList:[{
                                      questionID:3,
                                      answered:false,
                                      question:"what is the color of ccc?",
                                      answer:"red",
                                      scoreValue:200},
                                     {
                                      questionID:4,
                                       answered:false,
                                       question:"what is the color of ddd?",
                                       answer:"red",
                                       scoreValue:200}]},
                     {catagoryName: "animal", 
                      questionList:[{
                                    questionID:5,
                                     answered:false,
                                     question:"what is the color of rrr?",
                                     answer:"red",
                                     scoreValue:200},
                                     {
                                      questionID:6,
                                      answered:false,
                                      question:"what is the color of sss?",
                                      answer:"red",
                                      scoreValue:200}]}
                    ]}
    ],
    playerinHostLobbyList:["Apple","Banana"],
    score:[0,0],
    team1List:[],
    team2List:[],

    teamConfig:[
      {name:"team1",score:0,playerid:[1,3]},
      {name:"team2",score:0,playerid:[2,4]}],
    catagoryList:["science","animal","anime"],
    queueID:0,
    itsTurn:true,
    playerBuzzQueue:[
      {queueID:1,name:"player1",itsTurn:true},
      {queueID:2,name:"player2",itsTurn:false},
      {queueID:3,name:"player3",itsTurn:false}
      ],

    


    },
    mutations: {

      FIGHT_ANSWER:(state, playerName)=>{
        queueID++;
        if(queueID>1)
        state.itsTurn=false;
        let playerInQueue = {queueID:state.queueID, name:playerName,itsTurn:itsTurn}
        state.playerBuzzQueue.push(playerInQueue)
      },


      SET_CURRENT_GAME:(state, gameIndex)=> {
        state.currentGameIndex = gameIndex;
        state.playerinHostLobbyList.splice(0);
        state.team1List.splice(0);
        state.team2List.splice(0);
        state.score =[0,0];
      },
      IN_QUESTION:(state,inQuestion)=>state.inQuestionPage=inQuestion,
      SET_CURRENT_ANSWERING_QUESTIONID:(state, questionID)=>{
        state.currentAnsweringQuestionID = questionID
      },

      ADD_GAME:(state, newGame)=>{
        state.gameList.push(newGame)
      },

      ADD_NEW_CATAGORY:(state,newCatagoryName)=>{
        state.catagoryList.push( newCatagoryName)
      },
      UPDATE_GAME:(state,updatedGame)=>{
        state.gameList[index]=updatedGame        
      },

      ADD_QUESTION:(state,payload)=>{
        let i = 0;
        state.gameList[payload.gi].catagoryList.forEach((cata)=>{ 
        i++;
        payload.question.number=i;
        cata.questionList.push(payload.question);      
        })          
        },

        ADD_CATAGORY:(state,payload)  =>{
          state.gameList[payload.gi].catagoryList.push(payload.catagory);
        } ,

        ADD_PLAYER_BUZZ:(state,playerID)=>{
          state.playerBuzzQueue.push(playerID)
        },
        CLEAR_PLAYER_BUZZ_QUEUE:(state)=>{
          state.playerBuzzQueue.splice(0)
        },

        SET_ANSWERED:(state)=>{
          state.gameList[state.currentGameIndex].catagoryList.forEach((cata)=>{
            cata.questionList.forEach((ques)=>{
              console.log(ques.questionID+state.currentAnsweringQuestionID);    
              if(ques.questionID==state.currentAnsweringQuestionID)            
                ques.answered=true;                                                               
            })})
            state.playerBuzzQueue.splice(0);
            state.queueID=0;
          },
         
        PLAYER_JOIN:(state,playerName)=>{
          if(state.playerinHostLobbyList.length<4)
          state.playerinHostLobbyList.push(playerName)
        },

    },
    actions: {
      setGame({commit},gameIndex){
        commit('SET_CURRENT_GAME', gameIndex)
      },

      updateGame({commit}, updatedGame,index){
        commit('UPDATE_GAME', updatedGame,index)
      },
      
      addQuestion({commit}, payload){

        commit('ADD_QUESTION', payload)
      },

      addGame({commit}, newGame){
        commit('ADD_GAME', newGame)
      },
      addNewCatagory({commit}, newCatagoryName){
        commit('ADD_NEW_CATAGORY', newCatagoryName)
      },
      addCatagory({commit}, payload){
        commit('ADD_CATAGORY', payload)
      },

      addPlayerBuzz({commit},playerID){
        commit('ADD_PLAYER_BUZZ',playerID)
      },
      clearPlayerBuzz({commit}){
        commit('CLEAR_PLAYER_BUZZ_QUEUE')
      },
      setAnswered({commit}){
        commit('SET_ANSWERED')
      },
      setCurrentAnsweringQuestionID({commit},questionID){
        commit('SET_CURRENT_ANSWERING_QUESTIONID',questionID)
      },

      playerJoin({commit},playerName){
        commit('PLAYER_JOIN',playerName)
      },
      fightAnswer({commit},playerName){
        commit('FIGHT_ANSWER',playerName)
      },
      inQuestion({commit},inQuestion){
        commit('IN_QUESTION',inQuestion)
      }
      
    },

    getters:{
      gameList: state=>state.gameList,
      inQuestionPage:state=>state.inQuestionPage,
      catagoryList:state=>state.catagoryList,
      currentGameIndex:state=>state.currentGameIndex,
      playerBuzzQueue:state=>state.playerBuzzQueue,
      playerinHostLobbyList:state=>state.playerinHostLobbyList,
      teamConfig:state=>state.teamConfig,
    }
/*
  modules: {
  }
  */
})
