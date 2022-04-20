import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authSvc:AuthService) { }

  ngOnInit() {}

  async onRegister(email, password){
    try{
      // console.log(email, password);
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        console.log('user-->', user);
        //verifica email
      }
    }
    catch (error)
    {
      console.log('errro', error);
    }
  }

}
