import { Component, OnInit } from '@angular/core';
import { Camunda, Task } from '../../services/camunda';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];
  loading = true;

  constructor(private camundaService: Camunda) { }

  ngOnInit(): void {
    this.camundaService.getAllTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des tâches', err);
        this.loading = false;
      }
    });
  }
}
