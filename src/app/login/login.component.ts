import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService) { }

  ngOnInit() {}

    
   async onLogin(email,password){
     try{
       const user = await this.authSvc.Login(email.value, password.value);
       if (user){
       }
     }
     catch(error){console.log('Erorr->', error)};
  } 
}