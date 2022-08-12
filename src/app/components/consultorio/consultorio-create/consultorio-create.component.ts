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
    numeroConsultorio:  '',
  }

 

  numeroConsultorio: FormControl = new FormControl(null, [Validators.required]);
 
  constructor(
    private consultorioService: ConsultorioService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.consultorioService.create(this.consultorio).subscribe(resposta => {
      this.toastService.success('Consultório criado com sucesso', 'Novo chamado');
      this.router.navigate(['consultorios']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  validaCampos(): boolean {
    return this.numeroConsultorio.valid 
      
  }

}