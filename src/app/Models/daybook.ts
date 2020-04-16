import { Task } from './task';

export class Daybook {
  tasklist: Task[];
  constructor() {}
 getNbTasksByImportance() {
   // tslint:disable-next-line: max-line-length
   const primordiale = { name: 'Primordiales', value : this.tasklist.filter(task => task.taskChecked === true && task.importance === 3).length};
   // tslint:disable-next-line: max-line-length
   const importante =  { name: 'Importantes', value : this.tasklist.filter(task => task.taskChecked === true && task.importance === 2).length};
   // tslint:disable-next-line: max-line-length
   const facultatives = { name: 'Facultatives', value : this.tasklist.filter(task => task.taskChecked === true && task.importance === 1).length};
   const nonFinie =  { name: 'Non finies', value : this.tasklist.filter(task => task.taskChecked === false).length};
   return [primordiale, importante, facultatives, nonFinie];
 }
 getTasksByImportance() {
  const primordiales = { name: 'Primordiales',  tasks : this.tasklist.filter(task => task.importance === 3)};
  const importantes =  { name: 'Importantes', tasks : this.tasklist.filter(task => task.importance === 2)};
  const facultatives = { name: 'Facultatives', tasks : this.tasklist.filter(task => task.importance === 1)};
  return [primordiales, importantes, facultatives];
 }
}
