import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { ResponseComponent } from './components/candidate-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';




//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component : PublicLayoutComponent, children: [
      
      {path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'candidat', component: InfoCandidateComponent },
      { path: 'response', component: ResponseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]
  },
  

  { path: '', component: SidebarComponent,children:[

  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},
  
  //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
  
  { path: 'updatePhoto', component: UpdatePhotoComponent },
  { path: 'profilCandidat/:id', component: ProfilCandidatComponent },
  { path: 'recrutement', component: RecrutementsComponent }]},
  

 
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
