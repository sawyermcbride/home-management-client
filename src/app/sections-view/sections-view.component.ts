import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {NewSectionFormType} from '../../interfaces/forms.interface';
import { SectionDetailsComponent } from '../section-details/section-details.component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-sections-view',
  standalone: true,
  imports: [ReactiveFormsModule, SectionDetailsComponent],
  templateUrl: './sections-view.component.html',
  styleUrl: './sections-view.component.css'
})
export class SectionsViewComponent {
  newSectionForm: FormGroup;
  sectionDetails: boolean = false;
  sectionDetailsId: number = 0;
  view = false; 
  dashboardService: DashboardService = inject(DashboardService);

  constructor() {
    this.newSectionForm = new FormGroup({
      sectionName: new FormControl('', Validators.required),
      sectionFloor: new FormControl('', Validators.required),
      sectionDescription: new FormControl('')
    })

  }

  onSubmit() {
    const values = this.newSectionForm.value;

    this.dashboardService.addSection({...values, id: this.dashboardService.getSectionsCount() + 1});

    console.log(this.dashboardService.getAllSections());
  }

  onSectionClick(id: number) {
    this.sectionDetails = true;
    this.sectionDetailsId = id;
  }

  returnSection(view: boolean) {
    this.sectionDetails = false;
  }

}
