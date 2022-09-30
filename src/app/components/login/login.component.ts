import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/models/login.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginrequest:login={
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  constructor(private LoginService:LoginService,private router:Router) { }

  ngOnInit(): void {
   
  }
  logging()
  {
    this.LoginService.logging(this.loginrequest)
    .subscribe({
      next:(login) =>{
        console.log(login);
        alert('login successful');
        this.router.navigate(['explore']);
      } 
      
      
      })
  }

}
