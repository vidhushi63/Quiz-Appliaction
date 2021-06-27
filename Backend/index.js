var express=require('express');
var bodyParser=require('body-parser');
var app=express();
router=express.Router();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","origin, X-requested-with,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
    });
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json({
    limit:'50mb'
}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    permanentlimit:100000,
    extended:true
}));
const courses=require("./models/courses");
const quiz=require("./models/quiz");
const login=require("./models/login");

app.post("/insert",courses.saveInfo);
app.get("/select",courses.selectInfo);
app.get("/selectCourse",courses.selectCourses);
app.post("/update",courses.updateInfo);
app.get("/delete/:ID",courses.deleteInfo);


app.post("/login",login.saveInfo);
app.post("/select",login.selectInfo);


app.post("/createQuiz",quiz.saveInfo);
app.get("/selectQuiz/:course_ID",quiz.selectInfo);
app.get("/getCourseID/:C_ID",quiz.getCourseId);
app.get("/getAll",quiz.selectAll);
app.post("/updateQuiz",quiz.updateInfo);
app.get("/deleteQuiz/:ID",quiz.deleteInfo);
var server=app.listen(process.env.PORT || 4000,function(){
    var port=server.address().port;
    console.log('App running on the port',port);
})