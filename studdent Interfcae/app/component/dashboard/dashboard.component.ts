import { Component, OnInit } from '@angular/core';
import {course} from '../../model/course';
import{quiz} from '../../model/quiz';
import {Router} from '@angular/router';
import {DashboardService} from '../../service/dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model=new course()
  data:course[]=[]; 
  model2=new quiz()
  public i:number=0;
 public count:number=0;
  getMenu: quiz[]=[];
  results: Array<{ ques_id: number; marked: string; }> = [];

 
  
  public toggleButton:boolean=true;
  constructor(
    private router :Router,
   
    public service:DashboardService
  )
  {}
 


  TakeQuiz(data:any){
    this.service.showQuizById(data).subscribe((res:quiz[])=>{
      this.getMenu=res;
      var cs=document.getElementById("sub")|| {style:{visibility:'hidden'}}
      cs.style.visibility='visible'

  
    });
    
    
  }
  

  

  ngOnInit(): void {

    this.service.select().subscribe((res:course[])=>{
      this.data=res;
     //alert(JSON.stringify(this.data));
    
   });

  }
  
  checked(op:any,m:any){
    // alert(JSON.stringify(m.ans));
    // alert(JSON.stringify(op));
    
    if (m.ans == op){
      //alert(JSON.stringify(m));
      let x=m.point
      this.count+= x
     
    }  
    let eachOb={
      "ques_id":m.ques_id,
      "marked":op
    }
   
    
    //alert(JSON.stringify( eachOb));
 
    //this.results.push(eachOb);
    //alert(JSON.stringify(this.results));

  }
  submitQuiz(){
    alert("Total Marks Obtained: "+JSON.stringify(this.count))
  }

}
