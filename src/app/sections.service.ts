import { Injectable } from '@angular/core';
import { Task } from '../interfaces/objects.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }
  getTasksBySection(sectionId: number, recurring?: boolean)  {
    if(recurring) {
      return this.tasks.filter(task => task.sectionId === sectionId && task.recurring);  
    }
    return this.tasks.filter(task => task.sectionId === sectionId && !task.recurring);
  }

  taskComplete(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if(task) {
      task.status = 'removing';
      setTimeout(() => {
        task.status = 'complete';
      }, 500)
    }    
  }

  getTasks() {
    return this.tasks;
  }

  constructor() { }
}
