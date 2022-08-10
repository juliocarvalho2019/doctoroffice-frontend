import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {

  ELEMENT_DATA: Medico[] = [
    {
      id: 1,
      nome: 'Valdir Cezar',
      cpf: '123.456.789-10',
      email: 'Valdir@email.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/08/2022', 

      crm: '"CRM/SP 123452"',
      especialidade:'Obstetra',
      idade:'40'
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'crm', 'especialidade','idade','acoes'];
  dataSource = new MatTableDataSource<Medico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
