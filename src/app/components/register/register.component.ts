import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerrequest:register={
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  constructor(private registerservice:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  registers()
  {
    this.registerservice.registers(this.registerrequest)
    .subscribe({
      next:(register) =>{
        console.log(register);
        this.router.navigate(['explore']);
      } 
    })
  }

}

