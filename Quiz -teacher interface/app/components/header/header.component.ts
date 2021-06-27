import { Component, OnInit } from '@angular/core';
import {EditComponent} from '../edit/edit.component';
import{MyserviceService} from '../../service/myservice.service';
import{course} from '../../models/course';
import{quiz} from '../../models/quiz';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model=new course()
  data:course[]=[]; //3
  model2=new quiz()
  getTable:quiz[]=[];
  //getMenu:quiz[]=[]
  
  public toggleButton:boolean=true;
  constructor(

    private router :Router,
   
    public service:MyserviceService
  )
  {}
  
   enable(m:any){
    m.toggleButton=false;
    
    if(m.lbl=="Update"){
    
       this.updateForm(m);
        m.lbl="Edit"
     }
    else{
       m.lbl="Update";  
   }
    //  alert(JSON.stringify(m)
  }
   
  updateForm(data:any){
    this.service.updateInfo(data).subscribe(res=>{
      console.log('Form Updated');
      alert('Form Updated');
      this.router.navigateByUrl('/Home')
     });
  }

  deleteForm(data:any){
    this.service.deleteInfo(data).subscribe(res=>{
      console.log("Form Deleted");
      alert("Form Deleted");
      this.router.navigateByUrl('/Home')
    })
  }
  
  
  showByID(data:any){
  this.service.showQuizById(data).subscribe((res:quiz[])=>{
    this.getTable=res;
    //alert(JSON.stringify(this.model2.quiz_id));
    //alert(JSON.stringify(data));
    //this.router.navigateByUrl("/show");
  });
  
    this.service.showQuizById(this.model.course_id).subscribe((res:quiz[])=>{
      this.getTable=res;
      //alert(JSON.stringify(this.model.course_id));
  });
  
}

updatequiz(data:any){
  this.service.updateQuiz(data).subscribe(res=>{
    console.log('Form Updated');
    //alert('Form Updated');
    this.router.navigateByUrl('/Home')
   });
}
deletequiz(data:any){
  this.service.deleteQuiz(data).subscribe(res=>{
    console.log("Form Deleted");
    alert("Form Deleted");
    this.router.navigateByUrl('/Home')
  })
}
  ngOnInit(): void {

    this.service.select().subscribe((res:course[])=>{
      this.data=res;
      for(var i=0;i<this.data.length;i++)
      {
      this.data[i].toggleButton=true;
      this.data[i].lbl="Edit";

    }
    
   });
   

  }
}
