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
      this.taskList.map((e) => new Task(e));
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
 getTasksByImportance() {
  const primordiales = new TasksByImportance('Primodiales', this.taskList.filter(task => task.importance === 3));
  const importantes =  new TasksByImportance('Importantes', this.taskList.filter(task => task.importance === 2));
  const facultatives = new TasksByImportance('Facultatives', this.taskList.filter(task => task.importance === 1));
  const nonFinie =  new TasksByImportance('Non finies', this.taskList.filter(task => task.taskChecked === false));
  return [primordiales, importantes, facultatives, nonFinie];
 }
}
