import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Medico> {
    return this.http.get<Medico>(`${API_CONFIG.baseUrl}/medicos/${id}`);
  }

  findAll(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${API_CONFIG.baseUrl}/medicos`);
  }

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${API_CONFIG.baseUrl}/medicos`, medico);
  }

  update(medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${API_CONFIG.baseUrl}/medicos/${medico.id}`, medico);
  }
}