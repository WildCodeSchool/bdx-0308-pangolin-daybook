import { Task } from './task';
import { TasksByImportance } from './tasks-by-importance';
import { TasksFilterForDiagram } from './tasks-filter-for-diagram';

export class Daybook {
  tasklist: Task[];
  date: Date;
  validate = false;
  finised = false;
  theme: string;
  constructor() {}
 getNbTasksByImportance() {
   const primordiale = new TasksFilterForDiagram('Primordiales',
   this.tasklist.filter(task => task.taskChecked === true && task.importance === 3).length);
   const importante =  new TasksFilterForDiagram('Importantes',
   this.tasklist.filter(task => task.taskChecked === true && task.importance === 2).length);
   const facultatives = new TasksFilterForDiagram('Facultatives',
   this.tasklist.filter(task => task.taskChecked === true && task.importance === 1).length);
   const nonFinie =  new TasksFilterForDiagram('Non finies', this.tasklist.filter(task => task.taskChecked === false).length);
   return [primordiale, importante, facultatives, nonFinie];
 }
 getTasksByImportance() {
  const primordiales = new TasksByImportance('Primodiales', this.tasklist.filter(task => task.importance === 3));
  const importantes =  new TasksByImportance('Importantes', this.tasklist.filter(task => task.importance === 2));
  const facultatives = new TasksByImportance('Facultatives', this.tasklist.filter(task => task.importance === 1));
  return [primordiales, importantes, facultatives];
 }
}
