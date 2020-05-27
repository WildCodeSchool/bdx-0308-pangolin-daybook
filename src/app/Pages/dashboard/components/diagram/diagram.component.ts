import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';
import { TasksFilterForDiagram } from 'src/app/Models/tasks-filter-for-diagram';
import { DiagramMultidata } from 'src/app/Models/diagram-multidata';


@Component({
  selector: 'dbk-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],

})
export class DiagramComponent implements OnInit, OnChanges {
  @Input() weekDaybookList: Daybook[];
  diagramStyle = 'stackedBar';
  weekdata: (TasksFilterForDiagram[])[];
  single: TasksFilterForDiagram[];
  multi: DiagramMultidata[];
  view: any[] = [800, 300];
  colorScheme = {
    domain: ['#F57BA8', '#8CD8DB', '#CABE8A', '#FAC3AA']
  };
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Nb de tâches';
  animations = true;
  diagramlist = [];

  constructor() {
    this.view = [innerWidth / 1.48, 300];
    this.diagramlist = [
      { label: 'GridPie', value: 'gridpie' },
      { label: 'Stackedbar', value: 'stackedBar' },
    ];
  }

  ngOnInit(): void {
    this.multi = this.getMultiData();
    this.weekdata = this.weekDaybookList.map((e) => e.getNbTasksByImportance());
    this.single = this.getSingleData();
  }
  ngOnChanges(): void {
    this.multi = this.getMultiData();
    this.weekdata = this.weekDaybookList.map((e) => e.getNbTasksByImportance());
    this.single = this.getSingleData();
  }

  getMultiData() {
  const result = [];
  if (this.weekDaybookList.length > 0) {
  for (const  daybook of this.weekDaybookList) {
    result.push(new DiagramMultidata(daybook.getDayAndMonth(), daybook.getNbTasksByImportance()));
  }
  return result;
  } else {
    return [];
  }
  }
  getSingleData() {
    if (this.weekdata.length > 0) {
    const reducedArray = this.weekdata.reduce((a, b) => a.concat(b));
    return [
    new TasksFilterForDiagram('Primordiales', reducedArray.filter((e) => e.name === 'Primordiales').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Importantes', reducedArray.filter((e) => e.name === 'Importantes').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Facultatives', reducedArray.filter((e) => e.name === 'Facultatives').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Non finies', reducedArray.filter((e) => e.name === 'Non finies').reduce((a, b) => a + b.value, 0)),
    ];
  } else {
    return [
     new TasksFilterForDiagram('Primordiales', 0) ,
    new TasksFilterForDiagram('Importantes', 0) ,
    new TasksFilterForDiagram('Facultatives', 0) ,
    new TasksFilterForDiagram('Non finies', 0) ,
    ];
  }
  }
  onResize(event) {
    this.view = [event.target.innerWidth / 1.9, 300];
}

}
