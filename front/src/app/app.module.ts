import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ModalDevComponent } from './modal-dev/modal-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FinanceiroComponent,
    AgendaComponent,
    ModalDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
