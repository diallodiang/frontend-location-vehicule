import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  name: string;
  assignee: string | null;
  created: string;
  due?: string | null;
  taskState: 'Created' | 'Completed';
}

@Injectable({
  providedIn: 'root',
})

export class Camunda {
  private baseUrl = 'http://localhost:8080/camunda';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/all-tasks`);
  }
}
