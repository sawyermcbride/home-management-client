export interface Task {
  recurring: boolean;
  frequency: number;
  text: string;
  sectionId: number;
  status: 'complete' | 'incomplete'| 'deleted';
  createdAt: Date;
}