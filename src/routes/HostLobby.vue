<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


 <div>
       <div v-if="isSplash" class="container">
            <h1>Choose a game to host</h1>
            <select id="game" name="Game">
                <option value=""> </option>
            </select><br />
            <button  @click="submit">Start!</button>
       </div>

        <div v-else class="container">
            <h1>Avaliable players:</h1>
            <div class="playerList">"Player1, Player2, Player3, Player4"</div>
               <div class = "teamArea">
                    <pgTeamPickArea></pgTeamPickArea>
                    <pgTeamPickArea></pgTeamPickArea>
                    <button @click="submit">Start!</button>
               </div>
        </div>
 </div>

</template>
<script>
    import Controller from '@/mixins/controller'
    import pgTeamPickArea from '@/components/TeamPickArea.vue'
    import pgSplashForHost from '@/components/SplashForHost.vue'
    class HostLobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'HostLobby',
                isSplash:true
            }
        }

         submit() {

            this.isSplash=false;
        }
    }

    export default new HostLobbyController('pgHostLobby',{pgTeamPickArea,pgSplashForHost});

</script>
<style scoped>
/* Local styles for this template */
    .container {
       display: flex;
  width: 800px;
  padding: 10% 25% 0 25%;
  flex-flow: column wrap;
  text-align: center;
  /*background: indianred;*/
  text-align: center;
  justify-content: space-around; /*横向轴线*/
  align-content: flex-start; /*纵向轴线*/
  color: black;

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
