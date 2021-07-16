
import Axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/firestore'
import{vuexfireMutations,firestoreAction} from 'vuexfire'

const fbConfig = {
  apiKey: "AIzaSyDBfJcjpwoottzRDTYAw1QQJMvg-ZVbQaY",
  authDomain: "myfirstvueapp-2fc2e.firebaseappio.com",
  databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", 
  projectId: "myfirstvueapp-2fc2e",

}
const db =firebase.initializeApp(fbConfig).firestore();

export default{
  state:()=>({

    db,
    notes:{data:555,id:"sdfd"},
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


}),

  mutations: {
    ...vuexfireMutations,
  
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
      console.log(state.gameList.id);

   /*
     const Ref = db.collection('notes').doc('RV6FO1ewpdKc1EJLMEpi');
      Ref.get().then(result=>{
      console.log('Document data:', result.data());
     })
      */

    },

    IN_QUESTION:(state,inQuestion)=>state.inQuestionPage=inQuestion,

    SET_CURRENT_ANSWERING_QUESTIONID:(state, questionID)=>{
      state.currentAnsweringQuestionID = questionID
    },

    ADD_GAME:(state, newGame)=>{
      state.gameList.push(newGame);

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

      USER_CONNECTED:(state,data)=>{
        console.log("Round trip data back from server: "+data)
      },
  },

  actions: {
    connect({commit}){
      console.log("send data to server from store");
        Axios.post('http://localhost:2990/api/player/connect', this.state.currentGameIndex)
        .then(response =>response.data)
        .then(data => {commit('USER_CONNECTED', data)})
        .catch(error=>console.log(error))
    },

    bindGameList:firestoreAction(({bindFirestoreRef})=>{
      console.log("trying to add");
      return bindFirestoreRef('gameList',db.collection('gameList'))
    }),

   bindCatagoryList:firestoreAction(({bindFirestoreRef})=>{
    return bindFirestoreRef('catagoryList',db.collection('catagoryList'))
  }),

    setGameStatus:firestoreAction(({bindFirestoreRef})=>{
      return bindFirestoreRef('notes',db.collection('notes'))
    }),

    addNote:firestoreAction((context,payload)=>{
      return db.collection('notes').add(payload)
    }),
  
    updateNote:firestoreAction(async({state}, payload) => {
    await db.collection("notes").doc(payload.id).update({data:payload.data});
  }),



    loadPlayerList({commit}){

    },

    setGame({commit},gameIndex){
      commit('SET_CURRENT_GAME', gameIndex)
    },

    updateGame({commit}, updatedGame,index){
      commit('UPDATE_GAME', updatedGame,index)
    },
    
    addQuestion({commit}, payload){
      commit('ADD_QUESTION', payload)
    },
    addQuestionVuexFire:firestoreAction((context,newGame)=>{
      return db.collection('game').add(JSON.parse(JSON.stringify(newGame)))
    }),
    addGame({commit}, newGame){
      commit('ADD_GAME', newGame)
    },

    addGameVuexFire:firestoreAction((context,newGame)=>{
      return db.collection('gameList').add(JSON.parse(JSON.stringify(newGame)))
    }),

    addNewCatagory({commit}, newCatagoryName){
      commit('ADD_NEW_CATAGORY', newCatagoryName)
    },

    addNewCatagoryVuexFire:firestoreAction((context,newCatagoryName)=>{
      return db.collection('catagoryList').add({newCatagoryName})
    }),

    addCatagory({commit}, payload){
      commit('ADD_CATAGORY', payload)
    },

    updateGameListVuexFire:firestoreAction(async({state}, payload) => {
      await db.collection("gameList").doc(payload.id).update(JSON.parse(JSON.stringify(payload.game)));
    }),

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
    gameList: (state)=>{return state.gameList},
    inQuestionPage:state=>state.inQuestionPage,
    catagoryList:state=>state.catagoryList,
    currentGameIndex:state=>state.currentGameIndex,
    playerBuzzQueue:state=>state.playerBuzzQueue,
    playerinHostLobbyList:state=>state.playerinHostLobbyList,
    teamConfig:state=>state.teamConfig,
    theDB: state=>state.db,
    notes: (state)=>{return state.notes}
  },
}