import { Task } from './task';
import { TasksByImportance } from './tasks-by-importance';
import { TasksFilterForDiagram } from './tasks-filter-for-diagram';

export class Daybook {

  id: number;
  validated = false;
  finished = false;
  taskList: Task[] = [];
  theme: string;
  date: Date = new Date();

  constructor(daybook?: Daybook) {
    if ( daybook ) {
      Object.assign(this, daybook);
      this.date = new Date(daybook.date);
      this.taskList = this.taskList.map((e) => {
       e = new Task(e);
       e.daybook.id = daybook.id;
       return e;
      });
     }

  }
 getNbTasksByImportance(): TasksFilterForDiagram [] {
   const primordiale = new TasksFilterForDiagram('Primordiales',
   this.taskList.filter(task => task.taskChecked === true && task.importance === 3).length);
   const importante =  new TasksFilterForDiagram('Importantes',
   this.taskList.filter(task => task.taskChecked === true && task.importance === 2).length);
   const facultatives = new TasksFilterForDiagram('Facultatives',
   this.taskList.filter(task => task.taskChecked === true && task.importance === 1).length);
   const nonFinie =  new TasksFilterForDiagram('Non finies', this.taskList.filter(task => task.taskChecked === false).length);
   return [primordiale, importante, facultatives, nonFinie];
 }
 getTasksByImportanceForForm2() {
  const primordiales = new TasksByImportance('Primodiales', this.taskList.filter(task => task.importance === 3));
  const importantes =  new TasksByImportance('Importantes', this.taskList.filter(task => task.importance === 2));
  const facultatives = new TasksByImportance('Facultatives', this.taskList.filter(task => task.importance === 1));
  return [primordiales, importantes, facultatives];
 }

 getTasksByImportance() {
  const primordiales = new TasksByImportance('Primodiales', this.taskList.filter(task =>
    task.importance === 3 && task.taskChecked === true));
  const importantes =  new TasksByImportance('Importantes', this.taskList.filter(task =>
    task.importance === 2 && task.taskChecked === true));
  const facultatives = new TasksByImportance('Facultatives', this.taskList.filter(task =>
    task.importance === 1 && task.taskChecked === true));
  const nonFinie =  new TasksByImportance('Non finies', this.taskList.filter(task => task.taskChecked === false));
  return [primordiales, importantes, facultatives, nonFinie];
 }
 getDayAndMonth() {
   return  ('0' + (this.date.getDate())).slice(-2) + '/' + ('0' + (this.date.getMonth() + 1)).slice(-2);
 }
 canGoToFormStep1() {
  return (!this.finished && !this.validated);
 }
 canGoToFormStep2() {
  return (!this.finished && this.validated);
}
}
