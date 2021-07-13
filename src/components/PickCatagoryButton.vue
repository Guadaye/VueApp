<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->


                <select id="game" name="Game">
             
                    <option value="">catagoryplaceholder </option>
                </select>
                <button>Add new catagory</button>

            <slot></slot>


    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class PickCatagoryButtonController extends Controller {

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

    export default new PickCatagoryButtonController('pgPickCatagoryButton'/* , { subComponent, anotherComponent } */);

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

</style>