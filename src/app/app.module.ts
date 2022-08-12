import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// Componentes do projeto
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoListComponent } from './components/medico/medico-list/medico-list.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { PacienteListComponent } from './components/paciente/paciente-list/paciente-list.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/paciente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './components/paciente/paciente-delete/paciente-delete.component';
import { ConsultaListComponent } from './components/consulta/consulta-list/consulta-list.component';
import { ConsultaCreateComponent } from './components/consulta/consulta-create/consulta-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    MedicoListComponent,
    LoginComponent,
    MedicoCreateComponent,
    MedicoUpdateComponent,
    MedicoDeleteComponent,
    PacienteListComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent,
    PacienteDeleteComponent,
    ConsultaListComponent,
    ConsultaCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
