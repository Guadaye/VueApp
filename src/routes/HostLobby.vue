<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="container">
        <pgSplashForHost title = "Choose a game"></pgSplashForHost>
        <div class = "about">
            <h1>Avaliable players:</h1>
            <div class="playerList">"Player1, Player2, Player3, Player4"</div>
               <div class = "teamArea">
                    <pgTeamPickArea></pgTeamPickArea>
                    <pgTeamPickArea></pgTeamPickArea>
                    <button >Start!</button>
               </div>
        </div>
    </section>

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
            }
        }
    }

    export default new HostLobbyController('pgHostLobby',{pgTeamPickArea,pgSplashForHost});

</script>
<style scoped>
/* Local styles for this template */
    .container {
        display: flex;
        width: 100%;
        flex-direction:column;
        flex-flow:column wrap;
         text-align: center; 
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
