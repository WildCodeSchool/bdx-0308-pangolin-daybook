import { Daybook } from './daybook';
import { Task } from './task';

describe('Daybook', () => {
  it('should create an instance', () => {
    expect(new Daybook('theme', new Date(), [new Task('test', 1)] )).toBeTruthy();
  });
});
