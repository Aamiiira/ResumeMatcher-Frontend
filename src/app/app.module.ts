import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';

import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { CandidateService } from './services/candidate.service';
import { ReactiveFormsModule} from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination' ; 

import { MatDialogModule, } from '@angular/material/dialog';





import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';

import { EmailService } from './services/email.service';
import { MatIconModule, MatButtonModule, MatInputModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';



import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import {AccumulationChartModule} from '@syncfusion/ej2-angular-charts';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';

import {  MatDividerModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { LineComponent } from './shared/widgets/line/line.component';
import { Pie2Component } from './shared/widgets/pie2/pie2.component';

import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';

import { ResponseComponent } from './components/candidate-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';

import {EditorModule} from '@tinymce/tinymce-angular';


import {    MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
   
    InfoCandidateComponent,
   
 
    
    RecrutementsComponent,
   
    LoginComponent,
    RegisterComponent,
    
    HomeComponent,
    FooterComponent,
    
    ProfilCandidatComponent,
    ProfilComponent,
    DashboardComponent,
    PublicLayoutComponent,
    PieComponent,
    LineComponent,
    Pie2Component,
   
    UpdatePhotoComponent,
   
    ResponseComponent,
    UpdateProfilComponent,
    
    
    
   
    //LoginComponent,
    //RegisterComponent,
    //HomeComponent,
 
 
  ],
  imports: [
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    FullCalendarModule,
    AccumulationChartModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    EditorModule,
    MatSnackBarModule
  ],

  exports: [
    PieComponent
  ],
  providers: [CandidateService,EmailService,authInterceptorProviders,  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
