 import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

 @Component({
     selector: 'app-select-amount',
     templateUrl: './select-amount.component.html',
     styleUrls: ['./select-amount.component.css']
 })
 export class SelectAmountComponent implements OnInit {

     @Output() loanAmount = new EventEmitter<number>();
     @Output() loanDate = new EventEmitter<Date>();

     valueToSend: number = 0
     dateToSend: Date = new Date()

     constructor() { }

     ngOnInit(): void {
     }
     //--------------------------------------------------------------------------------------------
     sendAmount():void {

         this.loanAmount.emit(this.valueToSend)
     }
     //--------------------------------------------------------------------------------------------
     sendDate():void {
          this.loanDate.emit(this.dateToSend)

     }
     //--------------------------------------------------------------------------------------------
     onSubmit():void {

     }
     //--------------------------------------------------------------------------------------------
}
