import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewSectionFormType } from '../../interfaces/forms.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionsService } from '../sections.service';
import { Task } from '../../interfaces/objects.interface';

@Component({
  selector: 'app-section-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-details.component.html',
  styleUrl: './section-details.component.css'
})
export class SectionDetailsComponent {
  taskForm: FormGroup;
  showIntervalField: boolean = false;
  sectionsService: SectionsService = inject(SectionsService);

  @Input() sectionObject!: NewSectionFormType | undefined;
  @Output() backSectionEvent = new EventEmitter<boolean>(false);


  taskSubmit() {
    const values = this.taskForm.value;
    console.log(this.taskForm.value);

    const newTask: Task = {
      id: this.sectionsService.getTasks().length + 1,
      text: values.taskName,
      recurring: values.recurring === 'yes',
      sectionId: this.sectionObject?.id || 0,
      frequency: Number.parseInt(values.interval) || 0,
      status: 'incomplete',
      createdAt: new Date().getTime()
    }

    this.sectionsService.addTask(newTask);

    console.log(this.sectionsService.getTasks());
    this.taskForm.reset();
  }

  markComplete(id: number) {
    console.log('Marking task complete: ', id);
    this.sectionsService.taskComplete(id);
  }

  returnSection() {

    this.backSectionEvent.emit(true);
  }

  constructor() {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      recurring: new FormControl('no', Validators.required),
      interval: new FormControl('0')
    });

    this.taskForm.get('recurring')?.valueChanges.subscribe((value) => {
      this.showIntervalField = value === 'yes';
      this.toggleIntervalField();
    });
  }

  private toggleIntervalField() {
    const intervalControl = this.taskForm.get('interval');
    if(this.showIntervalField) {
      intervalControl?.enable();
    } else {
      intervalControl?.disable();
    }
  }
}
