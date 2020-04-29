import { TasksByImportance } from './tasks-by-importance';
import { Task } from './task';


describe('TasksByImportance', () => {
  it('should create an instance', () => {
    expect(new TasksByImportance('test', [new Task()])).toBeTruthy();
  });
});
