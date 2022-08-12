import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Consultorio } from '../models/consultorio';


@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Consultorio> {
    return this.http.get<Consultorio>(`${API_CONFIG.baseUrl}/consultorios/${id}`);
  }

  findAll(): Observable<Consultorio[]> {
    return this.http.get<Consultorio[]>(`${API_CONFIG.baseUrl}/consultorios`);
  }

  create(consultorio: Consultorio): Observable<Consultorio> {
    return this.http.post<Consultorio>(`${API_CONFIG.baseUrl}/consultorios`, consultorio);
  }

  update(consultorio: Consultorio): Observable<Consultorio> {
    return this.http.put<Consultorio>(`${API_CONFIG.baseUrl}/consultorios/${consultorio.id}`, consultorio);
  }

  delete(id: any): Observable<Consultorio> {
    return this.http.delete<Consultorio>(`${API_CONFIG.baseUrl}/consultorios/${id}`);
  }
}