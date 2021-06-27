import { Component,OnInit} from '@angular/core';
import { login } from '../model/login';
import{FormsModule} from '@angular/forms';
import{Router} from '@angular/router';
import{LoginServiceService} from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  title = 'login-page';
  
  model=new login();
  loading=true;
  public data:any
  constructor(
    private router :Router,
    public loginService:LoginServiceService
  )
  {}
  submitForm(m: any){
    this.loginService.select(m).subscribe(res=>{
      this.data=res
      // alert(JSON.stringify(res))
      // alert(JSON.stringify(m))
    
      if(this.data.length!=0){
       alert("Welcome..");
       this.router.navigateByUrl('/dash');
      }
      else{
        alert("Inavlid user name or password!!")
        this.loading=false;
      }
    })

}
ngOnInit() {
  
    
  }

}

