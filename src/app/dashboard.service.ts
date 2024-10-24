import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewSectionFormType } from '../interfaces/forms.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private sectionsCountSource: number = 0;
  private sections: NewSectionFormType[] = [];

  setCount(count: number) {
    this.sectionsCountSource = count;
  }

  addSection(section: NewSectionFormType) {
    this.sections.push(section);
  }

  getSectionById(id: number) {
    return this.sections.find(section => section.id === id);
  }

  getSectionsCount() {
    return this.sections.length;
  }

  getAllSections() {
    return this.sections;
  }

  constructor() { }
}
