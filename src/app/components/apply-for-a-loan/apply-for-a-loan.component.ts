 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms'
 import { LoanService } from 'src/app/services/loan.service';

 @Component({
     selector: 'app-apply-for-a-loan',
     templateUrl: './apply-for-a-loan.component.html',
     styleUrls: ['./apply-for-a-loan.component.css']
})
 export class ApplyForALoanComponent implements OnInit {
     loanForm: FormGroup
     statusForm: boolean = false
     loanAmount: number = 0
     loanDate: Date = new Date
     status: String = ''
     results: any

     //-----------------------------------------------------------------------------------------------------
     constructor(public fb: FormBuilder,
                 public loanService: LoanService) {
         this.loanForm = this.fb.group({
             idUser: [null, [Validators.required]],
             name:[null, [Validators.required]],
             email: [null, Validators.compose([Validators.email, Validators.required])],
             status: [null, [Validators.required]]
         })
     }
     //-----------------------------------------------------------------------------------------------------
     ngOnInit(): void {
         this.statusForm = !this.loanForm.invalid
          this.loanService.getAll().subscribe((data: any) => {
            this.results = data
      })

     this.status = this.getRandom() == 1 ? "Aprobado" : "Pendiente"

     console.log(this.status)

     }
     //-----------------------------------------------------------------------------------------------------
     sendUser():void {
         this.statusForm = this.loanForm.invalid

         if (this.loanForm.valid) {
             let newLoan = {
                id: this.results.length + 1,
                cedula: this.loanForm.value.idUser,
                name: this.loanForm.value.name,
                email: this.loanForm.value.email,
                loanAmount: this.loanAmount,
                loanDate: this.loanDate,
                status: this.status
             }

             console.log("All data is valid", newLoan)
             this.loanService.create(newLoan).subscribe((data:any)=>{
                  console.log('Loan has bean created...', data )
             })
         }
         else {
            console.log("There is invalid data in the form")
         }
     }
     //-----------------------------------------------------------------------------------------------------
     getAmount(e: number):void{
         this.loanAmount = e
         console.log('id recibido:...', e)
     }
     //-----------------------------------------------------------------------------------------------------
     getDate(e: Date):void{
         this.loanDate = e
         console.log('id recibido fecha:...', e)
     }
     //-----------------------------------------------------------------------------------------------------
     getRandom(): number {
        //console.log(Math.floor(Math.random() * (10 - 1)) + 1)
        if ((Math.floor(Math.random() * (10 - 1)) + 1) < 5) {
           return 1
        } else {
           return 0
        }
     }
 }
