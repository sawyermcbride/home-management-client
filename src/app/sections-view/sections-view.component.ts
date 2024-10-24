import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {NewSectionFormType} from '../../interfaces/forms.interface';
import { SectionDetailsComponent } from '../section-details/section-details.component';

@Component({
  selector: 'app-sections-view',
  standalone: true,
  imports: [ReactiveFormsModule, SectionDetailsComponent],
  templateUrl: './sections-view.component.html',
  styleUrl: './sections-view.component.css'
})
export class SectionsViewComponent {
  sections: Array<NewSectionFormType>;
  newSectionForm: FormGroup;
  sectionDetails: boolean = false;
  sectionDetailsId: number = 0;
  view = false; 

  constructor() {
    this.newSectionForm = new FormGroup({
      sectionName: new FormControl('', Validators.required),
      sectionFloor: new FormControl('', Validators.required),
      sectionDescription: new FormControl('')
    })

    this.sections = [];
  }

  onSubmit() {
    const values = this.newSectionForm.value;

    console.log(this.newSectionForm.value);

    this.sections.push({...values, id: this.sections.length + 1});
    console.log(this.sections);
  }

  onSectionClick(id: number) {
    this.sectionDetails = true;
    this.sectionDetailsId = id;
  }

  returnSection(view: boolean) {
    this.sectionDetails = false;
  }

}
