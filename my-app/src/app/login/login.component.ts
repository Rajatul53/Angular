import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  constructor(){ }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username ==="admin" && this.password === "dummy"){
        this.invalidLogin=false
      }
    else{
      this.invalidLogin=true
    }
  }
}
 