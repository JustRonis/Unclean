import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
