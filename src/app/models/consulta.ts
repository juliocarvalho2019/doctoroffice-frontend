export interface Consulta {
    id?:                any;
    dataAbertura?:   string;
    dataFechamento?: string;
    prioridade:      string;
    status:          string;
    medico:            any;
    paciente:            any;
  //  consultorio: any;
  //  nomeConsultorio: string;
    nomePaciente:     string;
    nomeMedico:     string;
 }