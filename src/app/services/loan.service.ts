 import { Injectable } from '@angular/core';
 import { environment } from 'src/environments/environment';
 import { HttpClient } from '@angular/common/http'

 @Injectable({
     providedIn: 'root'
 })
 export class LoanService {
     // -------------------------------------------------------------------------------------------
     constructor(private http: HttpClient) { }
     // -------------------------------------------------------------------------------------------

     getAll(): any {return this.http.get(`${environment.serverUrl}`)}

     // -------------------------------------------------------------------------------------------

     create(newLoan: any): any{return this.http.post(`${environment.serverUrl}/`, newLoan)}

     // -------------------------------------------------------------------------------------------

     getOne(): void{}

     // -------------------------------------------------------------------------------------------

     update(id: any, loanToModify: any): any { return this.http.put( `${environment.serverUrl}/${id}`, loanToModify)}

     // -------------------------------------------------------------------------------------------

 }
