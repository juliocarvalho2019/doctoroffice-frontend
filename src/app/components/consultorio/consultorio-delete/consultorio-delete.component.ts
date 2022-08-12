import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consultorio } from 'src/app/models/consultorio';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-consultorio-delete',
  templateUrl: './consultorio-delete.component.html',
  styleUrls: ['./consultorio-delete.component.css']
})
export class ConsultorioDeleteComponent implements OnInit {
 
  consultorio: Consultorio = {
    id:         '',
    numeroConsultorio: '',
  }

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

  delete(): void {
    this.service.delete(this.consultorio.id).subscribe(() => {
      this.toast.success('Consultorio deletado com sucesso', 'Delete');
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
}