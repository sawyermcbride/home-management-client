import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewSectionFormType } from '../../interfaces/forms.interface';

@Component({
  selector: 'app-section-details',
  standalone: true,
  imports: [],
  templateUrl: './section-details.component.html',
  styleUrl: './section-details.component.css'
})
export class SectionDetailsComponent {
  @Input() sectionObject!: NewSectionFormType;
  @Output() backSectionEvent = new EventEmitter<boolean>(false);

  returnSection() {
    console.log("Back section");
    this.backSectionEvent.emit(true);
  }
}
