import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consulta } from 'src/app/models/consulta';
import { Paciente } from 'src/app/models/paciente';
import { Medico } from 'src/app/models/medico';
import { ConsultaService } from 'src/app/services/consulta.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Consultorio } from 'src/app/models/consultorio';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})
export class ConsultaCreateComponent implements OnInit {

  consulta: Consulta = {
    prioridade:'',
    status:'',
    medico:'',
    paciente:'',
    consultorio:'',
    nomeConsultorio:'',
    nomePaciente:'',
    nomeMedico:'',
   
  }

  pacientes: Paciente[] = []
  medicos: Medico[] = []
  consultorios: Consultorio[] = []

  prioridade: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  medico: FormControl = new FormControl(null, [Validators.required])
  paciente: FormControl = new FormControl(null, [Validators.required])
  consultorio: FormControl = new FormControl(null, [Validators.required])

  constructor(
    private consultaService: ConsultaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private consultorioService: ConsultorioService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllPacientes();
    this.findAllMedicos();
    this.findAllConsultorios();
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
      this.medico.valid && this.paciente.valid
  }

  create(): void {
    this.consultaService.create(this.consulta).subscribe(resposta => {
      this.toastService.success('Consulta criada com sucesso', 'Nova consulta');
      this.router.navigate(['consultas']);
    }, ex => {
      console.log(ex);

      this.toastService.error(ex.error.error);
    })
  }

  findAllPacientes(): void {
    this.pacienteService.findAll().subscribe(resposta => {
      this.pacientes = resposta;
    })
  }

  findAllMedicos(): void {
    this.medicoService.findAll().subscribe(resposta => {
      this.medicos = resposta;
    })
}

findAllConsultorios(): void {
  this.consultorioService.findAll().subscribe(resposta => {
    this.consultorios = resposta;
  })
}
}
