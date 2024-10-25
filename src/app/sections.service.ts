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

  getTasks() {
    return this.tasks;
  }

  constructor() { }
}
