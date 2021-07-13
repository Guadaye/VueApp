 /*
Copyright (c) 2021. Haojun Liu. All Rights Reserved.
*/
'use strict';

import Express from 'express'

const Router = Express.Router();
Router.get('/connect',(request, response)=>{

});

Router.post('/connect',(request, response)=>{
     console.log("received request from store, sending response back"+response);
    response.send(JSON.stringify(1));
});



export default Router;
