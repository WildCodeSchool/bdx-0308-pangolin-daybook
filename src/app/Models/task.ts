export class Task {

  id: number;
  taskChecked = false;
  public title: string;
  public importance: number;
  constructor(task?: Task) {
    Object.assign(this, task);
  }

  checkedTask() {
    this.taskChecked = !this.taskChecked;
}
}
