import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

interface CamundaTask {
  id: string;
  name: string;
  assignee?: string | null;
  status?: 'TERMINATED' | 'ACTIVE';
}


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data.map(t => ({
          idTache: t.id,
          nomTache: t.name
        }));
      },
      error: (err) => console.error('Erreur de chargement : ', err)
    });
  }
}
