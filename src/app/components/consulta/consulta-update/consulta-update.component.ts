import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consulta } from 'src/app/models/consulta';
import { Consultorio } from 'src/app/models/consultorio';
import { Medico } from 'src/app/models/medico';
import { Paciente } from 'src/app/models/paciente';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-consulta-update',
  templateUrl: './consulta-update.component.html',
  styleUrls: ['./consulta-update.component.css']
})
export class ConsultaUpdateComponent implements OnInit {

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.consulta.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllPacientes();
    this.findAllMedicos();
    this.findAllConsultorios();
  }

  findById(): void {
    this.consultaService.findById(this.consulta.id).subscribe(resposta => {
      this.consulta = resposta;
    }, ex => {
      this.toastService.error(ex.error.error); 
    })
  }

  update(): void {
    this.consultaService.update(this.consulta).subscribe(resposta => {
      this.toastService.success('Consulta atualizada com sucesso', 'Atualizar  consulta');
      this.router.navigate(['consultas']);
    }, ex => {
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
validaCampos(): boolean {
  return this.prioridade.valid && this.status.valid &&
    this.medico.valid && this.paciente.valid && this.consultorio.valid
}

retornaStatus(status: any): string {
  if(status == '0') {
    return 'ABERTO'
  } else if(status == '1') {
    return 'EM ANDAMENTO'
  } else {
    return 'ENCERRADO'
  }
}

retornaPrioridade(prioridade: any): string {
  if(prioridade == '0') {
    return 'BAIXA'
  } else if(prioridade == '1') {
    return 'MÉDIA'
  } else {
    return 'ALTA'
  }
}

}

