import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Consultorio } from 'src/app/models/consultorio';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-consultorio-list',
  templateUrl: './consultorio-list.component.html',
  styleUrls: ['./consultorio-list.component.css']
})
export class ConsultorioListComponent implements OnInit {

 ELEMENT_DATA: Consultorio[] = []

  displayedColumns: string[] = ['id', 'numeroConsultorio','acoes'];
  dataSource = new MatTableDataSource<Consultorio>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator

 constructor(
    private service: ConsultorioService
  ) { }
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Consultorio>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
