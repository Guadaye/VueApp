<!--
VFS VUE Single File Component

<pg-about name="User"></pg-about>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>


    <section class="about-container">

        <div class="about">{{ name }} your Vue.js App</div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    class QuestionPageController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'QuestionPage',
            }
        }
    }

    export default new QuestionPageController('pgQuestionPage');

</script>
<style>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
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
