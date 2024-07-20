import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
    constructor(private router:ActivatedRoute) {
      // username:String=this.router.snapshot.params['name']
     }

     

     ngOnInit(): void {
         
         console.log(this.router.snapshot.params['name'])
     }

}
