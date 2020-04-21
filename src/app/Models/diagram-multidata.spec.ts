import { DiagramMultidata } from './diagram-multidata';
import { TasksFilterForDiagram } from './tasks-filter-for-diagram';

describe('DiagramMultidata', () => {
  it('should create an instance', () => {
    expect(new DiagramMultidata('test', [new TasksFilterForDiagram('test', 3)])).toBeTruthy();
  });
});
