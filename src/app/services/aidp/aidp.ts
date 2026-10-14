import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Aidp {
  private baseUrl = `http://localhost:3000/serial/ai`
  private readonly httpClient = inject(HttpClient)

  request(material: string): Observable<Material> {
    return this.httpClient.post<Material>(this.baseUrl, material)
  }
}

interface Material {
  title: string,
  summary: string,
  description: string,
}
