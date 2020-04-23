export class Task {

  id: number;
  taskChecked = false;
  constructor(public title: string, public importance: number) {
  }

  checkedTask() {
    this.taskChecked = !this.taskChecked;
}
}
