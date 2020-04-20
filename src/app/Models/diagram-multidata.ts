import { TasksFilterForDiagram } from './tasks-filter-for-diagram';

export class DiagramMultidata {
  constructor(public name: string, public series: TasksFilterForDiagram[]) {}
}
