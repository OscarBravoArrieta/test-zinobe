import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// firebase

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';


// Environment config
//import { environment } from '../environments/environment';


import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SelectAmountComponent } from './components/select-amount/select-amount.component';
import { ApplyForALoanComponent } from './components/apply-for-a-loan/apply-for-a-loan.component';
import { CurrentAmountComponent } from './components/current-amount/current-amount.component';
import { RequestListComponent } from './components/request-list/request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SelectAmountComponent,
    ApplyForALoanComponent,
    CurrentAmountComponent,
    RequestListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
