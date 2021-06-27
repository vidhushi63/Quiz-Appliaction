const express=require('express');
const router=express.Router();
const poolPromise =require('../connect');


exports.saveInfo=async(req,res)=>{
    var sql="Insert INTO courses(course_name,course_id,course_desc) VALUES('"+req.body.course_name+"','"+req.body.course_id+"','"+req.body.course_desc+"')";
    
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
  var sql="select * from courses"

  
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


exports.selectCourses=async(req,res)=>{
  var sql="select * from courses"

  
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
  var sql="Update courses set course_name='"+req.body.course_name+"',course_desc='"+req.body.course_desc+"'where course_id='"+req.body.course_id+"'";
  
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
  var sql="Delete from courses where course_id="+req.params.ID;
  
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


