import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private api = 'http://localhost:8081/engine-rest';

  constructor(private http: HttpClient) {}

  /** Récupérer toutes les tâches */
  getTasks(): Observable<any> {
    return this.http.get(`${this.api}/task`);
  }

  /** Claim de la tâche */
  claimTask(taskId: string, userId: string): Observable<any> {
    return this.http.post(`${this.api}/task/${taskId}/claim`, {
      userId: userId
    });
  }

  /** Compléter la tâche */
  completeTask(taskId: string, variables: any = {}): Observable<any> {
    return this.http.post(`${this.api}/task/${taskId}/complete`, {
      variables: variables
    });
  }
}
