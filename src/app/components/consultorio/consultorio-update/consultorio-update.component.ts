import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consultorio } from 'src/app/models/consultorio';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-consultorio-update',
  templateUrl: './consultorio-update.component.html',
  styleUrls: ['./consultorio-update.component.css']
})
export class ConsultorioUpdateComponent implements OnInit {
 
  consultorio: Consultorio = {
    id:         '',
    numeroConsultorio: ''
  }


  numeroConsultorio: FormControl =       new FormControl(null, Validators.required);
 
  constructor(
    private service: ConsultorioService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.consultorio.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.consultorio.id).subscribe(resposta => {
      this.consultorio = resposta;
    })
  }

  update(): void {
    this.service.update(this.consultorio).subscribe(() => {
      this.toast.success('Consultorio atualizado com sucesso', 'Update');
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