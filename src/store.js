import Vue from 'vue'
import Vuex from 'vuex'
import GameE from '@/model/Game.js'
import Question from '@/model/Question.js'
import Catagory from '@/model/Catagory.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    currentGameIndex:0,  
    gameList:[     
    {gameName: "game1",
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

    ],
    catagoryList:["science","animal","anime"],

    },
    mutations: {
      SET_CURRENT_GAME:(state, gameIndex)=> state.currentGameIndex = gameIndex,

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
          console.log(payload);
          state.gameList[payload.gi].catagoryList.push(payload.catagory);

        } 
    },
    actions: {
      setGame({commit},gameIndex){
        commit('SET_CURRENT_GAME', gameIndex)
      },

      updateGame({commit}, updatedGame,index){
        commit('UPDATE_GAME', updatedGame,index)
      },
      
      addQuestion({commit}, payload){
        console.log(payload);
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
      }
    },

    getters:{
      gameList: state=>state.gameList,
     
      catagoryList:state=>state.catagoryList,
      currentGameIndex:state=>state.currentGameIndex,
    
    }
/*
  modules: {
  }
  */
})
