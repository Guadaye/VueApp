<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>


 <div class ="container">
       <div v-if="isSplash" >
                 <pgbackButton></pgbackButton>
            <h1>Choose a game to host</h1>
            <form @submit.prevent="submit()" class = "form">

                <select v-model = "gameIndex" @change="changeTest">

                    <option v-for="(game,index) in gameList" :key="game.gameName" :value="index"> {{game.gameName}}  </option>                
                
                </select><br>

                <input class="normal-button" type="submit"  value="Start Hosting!" >
            </form>

            <button  @click="ClearLastGameData()">ClearLastGameData</button>
       </div>

        <div v-else >
            <pgbackButton></pgbackButton>
            <h1>Avaliable players:</h1>
            <div v-for="playerName in playerinHostLobbyList" :key ="playerName" class="playerList">{{playerName}}</div>
                <div class = "teamArea">
                    <form @submit.prevent ="startGame()"  class="form">
                        <h1>Team1</h1>
                            <select v-model="teamOne[0]">
                                <option v-for="(player) in playerinHostLobbyList" :key ="player" >{{player}}</option>
                            </select>
                            <select v-model="teamOne[1]">
                                <option v-for="(player) in playerinHostLobbyList" :key ="player" >{{player}}</option>
                            </select>

                        <h1>Team2</h1>
                            <select v-model="teamTwo[0]">
                                <option v-for="(player) in playerinHostLobbyList" :key ="player.name" >{{player}}</option>
                            </select>
                            <select v-model="teamTwo[1]">
                                <option v-for="(player) in playerinHostLobbyList" :key ="player.name" >{{player}}</option>
                            </select>
                            <br> 
                        <input type="submit" @click="startGame" value="Start Game!" >
                    </form>

                    
               </div>
        </div>
 </div>

</template>
<script>
    import Controller from '@/mixins/controller'
    import pgTeamPickArea from '@/components/TeamPickArea.vue'
    import pgSplashForHost from '@/components/SplashForHost.vue'
        import pgbackButton from '@/components/BackButton.vue'
    class HostLobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'HostLobby',
                isSplash:true,
                playerList:["Apple", "Watermelon", "Banana", "Orange"],           
                chosenGameIndex:0, 
                                            
                teamOne:[],
                teamTwo:[],
                gameIndex:0,
                chosenCatagoryList:null
            }
            this.injectGetters(['gameList','notes','playerinHostLobbyList']);  
            this.injectActions(['setGame','setGameVuexFire','changePointVueFire','updateNote','setGameStatus','addNote','playerJoinVuexFire']); 

        }

         submit() {           
             this.setGameVuexFire({GameOn:true,pickedGameId:this.gameIndex});
          //  this.setGame(this.gameIndex);  
            this.isSplash=false;

        }

        ClearLastGameData(){
            for(let i=0; i<3;i++){               
                this.playerJoinVuexFire({id:i+1,newName:""});
            }
            this.setGameVuexFires({GameOn:false,pickedGameId:-1});
            for(let i=0;i<1;i++){
                this.changePointVueFire({teamNum:i+1,score:0});
            }
        }

        startGame(){
    //        for(let i=0; i<1;i++){
  //              this.playerJoinVuexFire({id:playerinHostLobbyList[0],newName:this.teamOne[i]});
    //            this.playerJoinVuexFire({id:i+3,newName:this.teamTwo[i]});
   //         }

            this.teamOne.forEach(player=>{   
               let playerObject = JSON.parse(player);    
                 this.playerJoinVuexFire({id:playerObject.playerId,name:playerObject.name,team:1});
            })
            
            this.teamTwo.forEach(player=>{
                  let playerObject = JSON.parse(player);  
                  this.playerJoinVuexFire({id:playerObject.playerId,name:playerObject.name,team:2});
            })

           // this.setGameStatus();
            console.log("StartGame");
            this.$router.push("/HostInGame");
        }
    }

    export default new HostLobbyController('pgHostLobby',{pgTeamPickArea,pgSplashForHost,pgbackButton});

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
    }
    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .teamArea{
        flex-direction: row;
    }
</style>
