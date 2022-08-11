import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {
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
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void { 
    this.medico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.medico.id).subscribe(resposta => {
      resposta.perfis = []
      this.medico = resposta;
    })
  }

  update(): void {
    this.service.update(this.medico).subscribe(() => {
      this.toast.success('Médico atualizado com sucesso', 'Update');
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
