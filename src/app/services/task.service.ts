import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = "http://localhost:8081/engine-rest";

  constructor(private http: HttpClient) {}

  /** Liste toutes les tâches */
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/task`);
  }
}
