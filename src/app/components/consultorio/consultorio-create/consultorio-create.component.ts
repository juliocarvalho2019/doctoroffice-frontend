import { Consultorio } from 'src/app/models/consultorio';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-consultorio-create',
  templateUrl: './consultorio-create.component.html',
  styleUrls: ['./consultorio-create.component.css']
})
export class ConsultorioCreateComponent implements OnInit {

  consultorio: Consultorio = {
    id:         '',
    numeroConsultorio: '',
  }

  numeroConsultorio: FormControl =   new FormControl(null, Validators.required);
 

  constructor(
    private service: ConsultorioService,
    private toast:    ToastrService,
    private router:          Router,
    ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.consultorio).subscribe(() => {
      this.toast.success('Consultorio cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['consultorios'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }
 
  validaCampos(): boolean {
    return this.numeroConsultorio.valid 
  }


}
