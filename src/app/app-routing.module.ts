import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyForALoanComponent } from './components/apply-for-a-loan/apply-for-a-loan.component';
import { RequestListComponent } from './components/request-list/request-list.component';

const routes: Routes = [
     { path: 'applay-for-a-loan', component: ApplyForALoanComponent },
     { path: 'request-list-component', component: RequestListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
