import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';


interface CamundaTask {
  id: string;
  name: string;
  assignee?: string | null;
}


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent {
claim(_t18: CamundaTask) {
throw new Error('Method not implemented.');
}
  tasks: CamundaTask[] = [
    { id: "T1", name: "Valider contrat", assignee: null },
    { id: "T2", name: "Attribuer véhicule", assignee: "amine" },
  ];

  filteredTasks = [...this.tasks];
  search: string = '';
  currentPage = 1;
  pageSize = 5;
recl: any;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  /** Recharge les tâches */

  loadTasks() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
      this.applyFilter();
    });
  }

  /** Filtre par recherche */
  applyFilter() {
    const term = this.search.toLowerCase();

    this.filteredTasks = this.tasks.filter(task =>
      task.name.toLowerCase().includes(this.search.toLowerCase()) ||
      task.id.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  /** Claim */
  reclamé(task: CamundaTask) {
    this.taskService.claimTask(task.id, "mamadou").subscribe(() => {
      alert("Tâche assignée !");
      this.loadTasks();
    });
  }

  /** Complete */
  complete(task: CamundaTask) {
    this.taskService.completeTask(task.id, {}).subscribe(() => {
      alert("Tâche complétée !");
      this.loadTasks();
    });
  }
}