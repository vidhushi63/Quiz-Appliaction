import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course';
import { quiz } from '../../model/quiz';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {


  model = new course()
  data: course[] = []

  getMenu: quiz[] = []
  public toggleButton: boolean = true;
  constructor(

    private router: Router,

    public service: DashboardService
  ) { }


  // submitted=false;
  // submitQuiz(model:any){
  //   this.submitted=true;
  //   this.service.save(this.model).subscribe(res=>{
  //     // document.write('Form Saved!!');
  //     alert('Form Saved!!');
  //   })
  // }
 
  ngOnInit(): void {


   this.model=history.state.model
   alert(JSON.stringify (history.state))
    alert(JSON.stringify(this.model));

    this.service.showQuizById(this.model.course_id).subscribe((res: quiz[]) => {
      this.getMenu = res;
      

    });
  }
}