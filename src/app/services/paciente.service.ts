import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Paciente } from '../models/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Paciente> {
    return this.http.get<Paciente>(`${API_CONFIG.baseUrl}/pacientes/${id}`);
  }

  findAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${API_CONFIG.baseUrl}/pacientes`);
  }

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${API_CONFIG.baseUrl}/pacientes`, paciente);
  }

  update(pessoa: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${API_CONFIG.baseUrl}/pacientes/${pessoa.id}`, pessoa);
  }

  delete(id: any): Observable<Paciente> {
    return this.http.delete<Paciente>(`${API_CONFIG.baseUrl}/pacientes/${id}`);
  }
}