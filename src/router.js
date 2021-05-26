/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import PlayerInGame from '@/routes/PlayerInGame.vue'
import HostInGame from '@/routes/HostInGame.vue'
import HostLobby from '@/routes/HostLobby.vue'
import EditorLobby from '@/routes/EditorLobby.vue'
import GameSettingEditor from '@/routes/GameSettingEditor.vue'
import QuestionEditor from '@/routes/QuestionEditor.vue'
import QuestionPage from '@/routes/QuestionPage.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "Jeopardy"} },
        { path:"/about", name:"About", component: About },
        { path:"/playerInGame", name:"PlayerInGame", component: PlayerInGame },
        { path:"/HostInGame", name:"HostInGame", component: HostInGame },
        { path:"/HostLobby", name:"HostLobby", component: HostLobby },
        { path:"/GameSettingEditor", name:"GameSettingEditor", component: GameSettingEditor },
        { path:"/QuestionEditor", name:"QuestionEditor", component: QuestionEditor },
        { path:"/QuestionPage", name:"QuestionPage", component: QuestionPage },
        { path:"/EditorLobby", name:"EditorLobby", component: EditorLobby }
    ]
});