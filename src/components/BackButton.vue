<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

           <div class = "back">
            <button @click="backToHome">back</button>
        </div>
</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class BackButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
        }
          backToHome(){
            this.$router.push("/");
            }
    }

    export default new BackButtonController('pgBackButton'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
.back{
  text-align:left;
}

</style>