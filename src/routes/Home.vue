
<template>

    <section class="home-container">
        <div >
            <h2>Welcome to {{ name }}</h2>

             <button  @click="player">I am a player</button>
              <button  @click="host">I am the host</button>
               <button  @click="editor">I am the editor</button>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'

    class PlayerHomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
        }

        player() {
            this.$router.push("/PlayerInGame");
        }
        host(){
            this.$router.push("/HostLobby");
        }
        editor(){
            this.$router.push("/EditorLobby");
        }
    }

    export default new PlayerHomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    select, input, button {
        font-size: 1em;
        font-weight: 300;
        height: 1.4em;
        width: 20em;
    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }
</style>
