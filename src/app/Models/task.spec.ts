import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task('test', 3)).toBeTruthy();
  });
});

describe('test method checkedTask', () => {
  it('should return true', () => {
    const task = new Task('test', 3).checkedTask();

    expect(new Task('lol', 2)).toBeTruthy();
  });
});
