import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreateDaybookComponent } from './Pages/create-daybook/create-daybook.component';
import { ValidDaybookComponent } from './Pages/valid-daybook/valid-daybook.component';
import { EndDaybookComponent } from './Pages/end-daybook/end-daybook.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'daybook', component: CreateDaybookComponent},
  {path: 'valid', component: ValidDaybookComponent},
  {path: 'end', component: EndDaybookComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
