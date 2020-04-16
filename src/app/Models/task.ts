export class Task {
id: string;
taskChecked = false;
constructor(public title: string,  public importance: number) {}
checkedTask() {this.taskChecked = !this.taskChecked; } }
