import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateDaybookComponent } from './Pages/create-daybook/create-daybook.component';
import { ValidDaybookComponent } from './Pages/valid-daybook/valid-daybook.component';
import { EndDaybookComponent } from './Pages/end-daybook/end-daybook.component';
import { NavbarComponent } from './CommonComponent/navbar/navbar.component';
import { FooterComponent } from './CommonComponent/footer/footer.component';
import { DiagramComponent } from './Pages/dashboard/components/diagram/diagram.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CreateDaybookComponent,
    ValidDaybookComponent,
    EndDaybookComponent,
    NavbarComponent,
    FooterComponent,
    DiagramComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    NgxChartsModule,
    ButtonModule,
    SliderModule,
    MenuModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
