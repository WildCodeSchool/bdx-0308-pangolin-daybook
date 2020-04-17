import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './CommonComponent/footer/footer.component';
import { CreateDaybookComponent } from './Pages/create-daybook/create-daybook.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'daybook', component: CreateDaybookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
