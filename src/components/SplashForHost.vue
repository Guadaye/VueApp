<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

-->
<template>

    <section class="container">  <!-- Just one main element per template -->
        <div class = "splash">
    
            <div>{{ title }}</div>
          
            <h1>Choose a game to host</h1>
                <select id="game" name="Game">
                    <option value=""> </option>
                </select><br />


            <button>Start!</button>
        </div>
      
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class SplashController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "SplashScreen"
            }
            this.props = { // props are passed in when using this component
                title: String,
                default: 'Default',
            }
        }
    }

    export default new SplashController('pgSplash'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .container {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: space-around;
        align-items:center;
        z-index: 9000;
    }

    .splash {
        background-size:100% 100%;
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
        height:512px;
        width:512px;
    }

</style>