'use strict';

import Express from 'express'

const Router = Express.Router();
Router.get('/connect',(request, response)=>{

});

Router.post('/connect',(request, response)=>{
     console.log("received response"+response);
    response.send(1);
});



export default Router;
