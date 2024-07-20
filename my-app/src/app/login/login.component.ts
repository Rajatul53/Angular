import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true,
  imports:[NgIf,
    FormsModule
  ]
})
export class LoginComponent implements OnInit{
  
  username: string = 'admin'
  password: string = ''
  invalidLogin: boolean = false
  errorMessage: string = "invalid creds"
  constructor(private router:Router){ }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username ==="admin" && this.password === "dummy"){
        this.router.navigate(['welcome',this.username])
        this.invalidLogin=false
      }
    else{
      this.invalidLogin=true
    }
  }
}
 