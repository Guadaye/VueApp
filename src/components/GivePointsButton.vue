<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->


            <tr>
                <th><button>Add Point</button></th>
                <th><button>Deduce Point</button></th>
            </tr>


            <slot></slot>


    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class GivePointButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                title: String
            }
        }

        // your local component methods
        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }
    }

    export default new GivePointButtonController('pgGivePointButton'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {

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