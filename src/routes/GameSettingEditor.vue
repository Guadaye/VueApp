<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="container">

        <div class="about">{{ name }} 

            <form id="info-form" class="form">
                    Name of your game:<br>
                    <input type="text" name="levelName" value="Game1" /><br>
                    Question numbers for each catagory:<br>
                    <input type="text" name="obstacles" value="4" /><br>
                    Catagory picked:<br>
                    
                    <pgPickCatagoryButton></pgPickCatagoryButton>

                    <input type="submit" name="action" value="Submit" />
            </form>






        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import pgPickCatagoryButton from "@/components/PickCatagoryButton.vue"
    class GameSettingEditorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'GameSettingEditor',
            }
        }
    }

    export default new GameSettingEditorController('pgGameSettingEditor',{pgPickCatagoryButton});

</script>
<style scoped>
/* Local styles for this template */
    .container {
        display: flex;
        width: 100%;
        flex-direction:column;
        flex-flow:row wrap;
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
</style>
