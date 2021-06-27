import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../service/myservice.service';
import {course} from '../../models/course';
import{quiz} from'../../models/quiz';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  model=new quiz()
  cats: course[]=[];
  data:quiz[]=[];
  public toggleButton:boolean=true;
  constructor(

    private router :Router,
   
    public service:MyserviceService
  )
  {}
  
  // enable(m:any){
  //   m.toggleButton=false;
    
  //   if(m.lbl=="Update"){
    
  //     this.updateForm(m);
  //      m.lbl="Edit"
  //   }
  //   else{
  //     m.lbl="Update";  
  //   }
     
     
  //alert(JSON.stringify(m)
  //}

  
  submitted=false;
  submitForm(model:any){
    this.submitted=true;
    this.model.ques_id=Math.floor(Math.random() * 100+ 1);
    this.service.Create(this.model).subscribe(res=>{
      // document.write('Form Saved!!');
      alert('Form Saved!!');

    })
    
  }
  // updateForm(data:any){
  //   this.empService.updateInfo(data).subscribe(res=>{
  //     console.log('Form Updated');
  //     alert('Form Updated');
  //    });
  // }

  // deleteForm(data:any){
  //   this.service.deleteInfo(data).subscribe(res=>{
  //     console.log("Form Deleted");
  //     alert("Form Deleted");
  //   })
  // }
  

  ngOnInit(): void {
    this.service.select().subscribe((data:course[])=>{
      console.log(data);
      this.cats=data;
  })
  
}


}