const express= require('express');
const Router = express.Router();

Router.post('/fooddata',async(req,res)=>{
    try{
        res.send([global.foodDataitems,global.foodCategory]);
    }
    catch(err){
        console.error(err);
    }
})

module.exports = Router;