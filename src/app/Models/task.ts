import { Daybook } from './daybook';

export class Task {

  id: number;
  taskChecked = false;
  public title: string;
  public importance: number;
  daybook = new Daybook();
  constructor(task?: Task) {
    Object.assign(this, task);
  }

  checkedTask() {
    this.taskChecked = !this.taskChecked;
}
}
