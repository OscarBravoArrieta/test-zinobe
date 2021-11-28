import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {


  columnas: string[] = ['id', 'cedula', 'nombre', 'correo', 'valor', 'fecha','estado', 'pagar'];

  results: any

  constructor(private loanService: LoanService) { }
  // ----------------------------------------------------------------------------------------------
  ngOnInit(): void {
       this.loanService.getAll().subscribe((data: any) => {
          this.results = data
          console.log(data)
      })
  }
  // ----------------------------------------------------------------------------------------------
  update(j: any): void {
     console.log(this.results[j].status)

     if (this.results[j].status == 'Pendiente'){
         let loanToModify = {
             id: j,
             cedula: this.results[j].cedula,
             name: this.results[j].name,
             email: this.results[j].email,
             loanAmount: this.results[j].loanAmount,
             loanDate: this.results[j].loanDate,
             status: "Pagado"
         }
         this.loanService.update(j, loanToModify).subscribe((data: any)=>[
             console.log('Actualizado', loanToModify)
         ])
     }
  }
  // ----------------------------------------------------------------------------------------------

}
