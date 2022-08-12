import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

 ELEMENT_DATA: Paciente[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email','acoes'];
  dataSource = new MatTableDataSource<Paciente>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator

 constructor(
    private service: PacienteService
  ) { }
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Paciente>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
