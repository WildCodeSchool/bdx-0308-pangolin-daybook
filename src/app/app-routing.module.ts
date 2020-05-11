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
import { UserGuard } from './core/user.guard';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard] },
  {path: 'daybook', component: CreateDaybookComponent, canActivate: [UserGuard, Form1Guard] },
  {path: 'valid', component: ValidDaybookComponent, canActivate: [UserGuard, Form2Guard]},
  {path: 'end', component: EndDaybookComponent, canActivate: [UserGuard, Form3Guard]},
  {path: 'oauth/:token', component: DashboardComponent},
  {path: '**', component: DashboardComponent, canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
