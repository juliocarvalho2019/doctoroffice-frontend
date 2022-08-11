import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {
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

  delete(): void {
    this.service.delete(this.medico.id).subscribe(() => {
      this.toast.success('Médico deletado com sucesso', 'Delete');
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
}
