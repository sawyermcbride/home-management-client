import { Component, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  counter: number = 0;
  dashboardService: DashboardService = inject(DashboardService);
  sectionsServce: SectionsService = inject(SectionsService);

  incrementCounter() {
    this.counter++;
  }
}
