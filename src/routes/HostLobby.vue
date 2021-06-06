<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


 <div class ="container">
       <div v-if="isSplash" >
                 <pgbackButton></pgbackButton>
            <h1>Choose a game to host</h1>
            <form @submit.prevent="submit()" class = "form">

                <select v-model = "chosenCatagoryList" @change="changeTest">

                    <option v-for="game in games" :key="game.gameName" :value="game.gameName"> {{game.gameName}}  </option>                
                
                </select><br>

                <input type="submit"  value="Start Hosting!" >
            </form>
       </div>

        <div v-else >
            <pgbackButton></pgbackButton>
            <h1>Avaliable players:</h1>
            <div class="playerList">"Apple, Watermelon, Banana, Orange"</div>
                <div class = "teamArea">
                    <form @submit.prevent ="startGame()"  class="form">
                        <h1>Team1</h1>
                            <select id="game" name="Game">
                                <option value="">Apple </option>
                            </select>
                            <select id="game" name="Game">
                                <option value="">Banana </option>
                            </select>

                        <h1>Team2</h1>
                        <select id="game" name="Game">
                            <option value="">Watermelon </option>
                        </select>
                        <select id="game" name="Game">
                            <option value="">Orange </option>
                        </select>
                        <input type="submit"  value="Start Game!" >
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
                games:[
                    {gameName: "game1",
                    questionNumber: 1,
                    catagoryList :[{catagoryName: "science", 
                                    questionList:[{question:"what is the color of apple?",
                                                    answer:"red",
                                                    scoreValue:200}
                                                ]},]}],
                chosenGameIndex:0,                                
                teamOne:[],
                teamTwo:[],
                chosenCatagoryList:null
            }
        }

         submit() {
             
            this.isSplash=false;
        }
        changeTest(){
            //保存数据 跳转
            console.log("chosenCatagoryList:"+this.chosenCatagoryList)
        }

        startGame()
        {
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
