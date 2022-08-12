import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ConsultaCreateComponent } from './components/consulta/consulta-create/consulta-create.component';
import { ConsultaListComponent } from './components/consulta/consulta-list/consulta-list.component';
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

import { ConsultorioCreateComponent } from './components/consultorio/consultorio-create/consultorio-create.component';
import { ConsultorioDeleteComponent } from './components/consultorio/consultorio-delete/consultorio-delete.component';
import { ConsultorioListComponent } from './components/consultorio/consultorio-list/consultorio-list.component';
import { ConsultorioUpdateComponent } from './components/consultorio/consultorio-update/consultorio-update.component';
import { ConsultaUpdateComponent } from './components/consulta/consulta-update/consulta-update.component';
import { ConsultaReadComponent } from './components/consulta/consulta-read/consulta-read.component';

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

      { path: 'consultorios', component: ConsultorioListComponent },
      { path: 'consultorios/create', component: ConsultorioCreateComponent },
      { path: 'consultorios/update/:id', component: ConsultorioUpdateComponent },
      { path: 'consultorios/delete/:id', component: ConsultorioDeleteComponent },

      { path: 'consultas', component: ConsultaListComponent },
      { path: 'consultas/create', component: ConsultaCreateComponent },
      { path: 'consultas/update/:id', component: ConsultaUpdateComponent },
      { path: 'consultas/read/:id', component: ConsultaReadComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }