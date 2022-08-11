import { LoginComponent } from './components/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoListComponent } from './components/medico/medico-list/medico-list.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      
      { path: 'medicos', component: MedicoListComponent },
      { path: 'medicos/create', component: MedicoCreateComponent },
      { path: 'medicos/update/:id', component: MedicoUpdateComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }