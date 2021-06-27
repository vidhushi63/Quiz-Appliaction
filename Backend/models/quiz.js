const express=require('express');
const router=express.Router();
const poolPromise =require('../connect');


exports.saveInfo=async(req,res)=>{
    var sql="Insert INTO quiz(quiz_id,ques,ques_id,option1,option2,option3,option4,ans,point,total_marks,min_marks) VALUES('"+req.body.quiz_id+"','"+req.body.ques+"','"+req.body.ques_id+"','"+req.body.option1+"','"+req.body.option2+"','"+req.body.option3+"','"+req.body.option4+"','"+req.body.ans+"','"+req.body.point+"','"+req.body.total_marks+"','"+req.body.min_marks+"')";
    
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



exports.selectAll=async(req,res)=>{
  var sql="select * from quiz "

  
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

exports.getCourseId=async(req,res)=>{
  var sql="Select * from quiz where quiz_id="+req.params.C_ID;
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
  var sql="Select quiz.* from quiz where quiz.quiz_id="+req.params.course_ID;

  
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

exports.updateInfo=async(req,res)=>{
  var sql="Update quiz set ques='"+req.body.ques+"', option1='"+req.body.option1+"', option2='"+req.body.option2+"',option3='"+req.body.option3+"',option4='"+req.body.option4+"',ans='"+req.body.ans+"',point='"+req.body.point+"', total_marks='"+req.body.total_marks+"',min_marks='"+req.body.min_marks+"'where ques_id='"+req.body.ques_id+"'";
  
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
exports.deleteInfo=async(req,res)=>{
  var sql="Delete from quiz where ques_id="+req.params.ID;
  
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

