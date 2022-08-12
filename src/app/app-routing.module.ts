import { ConsultaCreateComponent } from './components/consulta/consulta-create/consulta-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoListComponent } from './components/medico/medico-list/medico-list.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { NavComponent } from './components/nav/nav.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './components/paciente/paciente-delete/paciente-delete.component';
import { PacienteListComponent } from './components/paciente/paciente-list/paciente-list.component';
import { PacienteUpdateComponent } from './components/paciente/paciente-update/paciente-update.component';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { ConsultaListComponent } from './components/consulta/consulta-list/consulta-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      
      { path: 'medicos', component: MedicoListComponent },
      { path: 'medicos/create', component: MedicoCreateComponent },
      { path: 'medicos/update/:id', component: MedicoUpdateComponent },
      { path: 'medicos/delete/:id', component: MedicoDeleteComponent },

      { path: 'pacientes', component: PacienteListComponent },
      { path: 'pacientes/create', component: PacienteCreateComponent },
      { path: 'pacientes/update/:id', component: PacienteUpdateComponent },
      { path: 'pacientes/delete/:id', component: PacienteDeleteComponent },

      { path: 'consultas', component: ConsultaListComponent },
      { path: 'consultas/create', component: ConsultaCreateComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }