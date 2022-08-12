import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/models/consulta';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  ELEMENT_DATA: Consulta[] = [
    {
      id:                          1,
      dataAbertura:     '21/06/2021',
      dataFechamento:   '21/06/2021',
      prioridade:             'ALTA',
      status:            'ANDAMENTO',
      medico:            	  	   1,
      paciente:                     6,
      nomePaciente: '   Valdir Cezar',
      nomeMedico: 'Albert Einstein',
    }
  ]

  displayedColumns: string[] = ['id', 'paciente', 'medico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Consulta>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
