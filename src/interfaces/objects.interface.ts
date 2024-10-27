export interface Task {
  id: number
  recurring: boolean;
  frequency: number;
  text: string;
  sectionId: number;
  status: 'complete' | 'incomplete'| 'deleted' | 'removing';
  createdAt: number;
}