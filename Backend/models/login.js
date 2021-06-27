const express=require('express');
const router=express.Router();
const poolPromise =require('../connect');


exports.saveInfo=async(req,res)=>{
    var sql="Insert INTO login(user_id,user_pass) VALUES('"+req.body.user_id+"','"+req.body.user_pass+"')";
    
    try{
      //const pool=await poolPromise
      poolPromise.connect().then(() => {
          console.log('Connected to mysql...')
      }).catch(e => {
          console.error('Error connecting mysql...')
          process.exit()
        })
    
      poolPromise.executeQuery(sql).then((d) => {
          console.log(d);
          res.status(200).send(d)
        }).catch(e => {
          console.log(e);
          res.status(500).send('Sorry, something went wrong!')
        })
      
      // res.send(JSON.stringify(data)) 
  }
  catch(err){
      res.status(500)
      res.send(err.message)
  }
}

exports.selectInfo=async(req,res)=>{
    var sql="Select * from login where user_id='"+req.body.user_id+"' and user_pass='"+req.body.user_pass+"'";
    try{
      //const pool=await poolPromise
      poolPromise.connect().then(() => {
          console.log('Connected to mysql...')
      }).catch(e => {
          console.error('Error connecting mysql...')
          process.exit()
        })
    
      poolPromise.executeQuery(sql).then((d) => {
          console.log(d);
          res.status(200).send(d)
        }).catch(e => {
          console.log(e);
          res.status(500).send('Sorry, something went wrong!')
        })
      
      // res.send(JSON.stringify(data)) 
  }
  catch(err){
      res.status(500)
      res.send(err.message)
  }
}