<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>

    <section class="score-board">  <!-- Just one main element per template -->

      <span>Team A: {{teamConfig[0].score}} point</span>
      <span>Team B: {{teamConfig[1].score}} point</span>

    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class ScordBoardController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world",

    
            }
            this.props = { // props are passed in when using this component
                teamAScore:0,
                teamBScore:0,
            }
                  this.injectGetters(['teamConfig']);
        }
    }

    export default new ScordBoardController('pgGScordBoard'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    
    .score-board{
        font-weight: bold;
        margin: 10px;
    }
    .score-board span{
        margin: 30px;
    } 
    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

    .scoreBoard{
        margin:40px 40px; 
    }
</style>