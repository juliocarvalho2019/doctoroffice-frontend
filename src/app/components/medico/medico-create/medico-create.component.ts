import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  medico: Medico = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: '',
    crm:'',
    especialidade: '',
    idade:''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =   new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  crm: FormControl =   new FormControl(null, Validators.required);
  especialidade: FormControl =   new FormControl(null, Validators.required);
  idade: FormControl =   new FormControl(null, Validators.required);

  constructor(
    private service: MedicoService,
    private toast:    ToastrService,
    private router:          Router,
    ) { }

  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.medico).subscribe(() => {
      this.toast.success('Médico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['medicos'])
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
  addPerfil(perfil: any): void {
    if(this.medico.perfis.includes(perfil)) {
      this.medico.perfis.splice(this.medico.perfis.indexOf(perfil), 1);
    } else {
      this.medico.perfis.push(perfil);
    }

  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
     && this.email.valid && this.senha.valid 
     && this.crm.valid && this.especialidade.valid 
     && this.idade.valid 
  }


}
