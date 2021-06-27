import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../service/myservice.service';
import {course} from '../../models/course';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import {} from '@angular/material';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  model=new course()
  data:course[]=[];
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
    this.model.course_id=Math.floor(Math.random() * 1000 + 1);
    this.service.save(this.model).subscribe(res=>{
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
  }

}
