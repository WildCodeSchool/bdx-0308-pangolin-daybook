import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreateDaybookComponent } from './Pages/create-daybook/create-daybook.component';
import { ValidDaybookComponent } from './Pages/valid-daybook/valid-daybook.component';
import { EndDaybookComponent } from './Pages/end-daybook/end-daybook.component';
import { Form3Guard } from './core/form3.guard';
import { Form2Guard } from './core/form2.guard';
import { Form1Guard } from './core/form1.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'daybook', component: CreateDaybookComponent},
  {path: 'valid', component: ValidDaybookComponent},
  {path: 'end', component: EndDaybookComponent},
  // {path: 'daybook', component: CreateDaybookComponent, canActivate: [Form1Guard]},
  // {path: 'valid', component: ValidDaybookComponent, canActivate: [Form2Guard]},
  // {path: 'end', component: EndDaybookComponent, canActivate: [Form3Guard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
