 import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

 @Component({
      selector: 'app-current-amount',
      templateUrl: './current-amount.component.html',
     styleUrls: ['./current-amount.component.css']
 })
 export class CurrentAmountComponent implements OnInit {
     baseCapital: number = 0

     constructor() { }

     ngOnInit(): void {
          this.loadBaseCaptal()
     }
     loadBaseCaptal(): void{

         if(!localStorage.getItem('baseCapital')) {
              localStorage.setItem('baseCapital', environment.baseCapital.toString())
         }else {
             this.baseCapital = Number(localStorage.getItem('baseCapital'))
        }
     }

}
