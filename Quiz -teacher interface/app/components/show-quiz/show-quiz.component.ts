import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../service/myservice.service';
import {course} from '../../models/course';
import{quiz} from'../../models/quiz';
import {Router} from '@angular/router';
@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  model=new quiz()
  getMenu:quiz[]=[];
  catMenu:quiz[]=[];
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
     //alert(JSON.stringify(m)
  }
  // submitted=false;
  // submitForm(model:any){
  //   this.submitted=true;
  //   this.service.save(this.model).subscribe(res=>{
  //     // document.write('Form Saved!!');
  //     alert('Form Saved!!');
  //   })
  // }
  updateForm(data:any){
    this.service.updateQuiz(data).subscribe(res=>{
      console.log('Form Updated');
      alert('Form Updated');
      this.router.navigateByUrl('/show')
     });
  }
  deleteForm(data:any){
    this.service.deleteQuiz(data).subscribe(res=>{
      console.log("Form Deleted");
      alert("Form Deleted");
      this.router.navigateByUrl('/show')
    })
  }

  ngOnInit(): void {
     this.service.showQuizById(this.getMenu).subscribe((res:quiz[])=>{
       this.getMenu=res;
       for(var i=0;i<this.getMenu.length;i++)
       {
       this.getMenu[i].toggleButton=true;
       this.getMenu[i].lbl="Edit";
       alert(JSON.stringify(this.getMenu));
     }
    });

  //  this.service.getAll().subscribe((data:quiz[])=>{
  //   this.model = data[0];
  //   for(var i=0;i<this.getMenu.length;i++)
  //     {
  //     this.getMenu[i].toggleButton=true;
  //     this.getMenu[i].lbl="Edit";
      
  //   }
  //   alert(JSON.stringify( data));
    
  // })

    // this.service.getAll().subscribe((data:quiz[])=>{
    // this.catMenu=data;
    // // alert(JSON.stringify( data));

    // })
   
  }
}
function subscribe(arg0: (res: quiz[]) => void) {
  throw new Error('Function not implemented.');
}

