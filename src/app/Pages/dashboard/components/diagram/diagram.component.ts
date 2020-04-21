import { Component, OnInit, Input } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksFilterForDiagram } from 'src/app/Models/tasks-filter-for-diagram';
import { DiagramMultidata } from 'src/app/Models/diagram-multidata';


@Component({
  selector: 'dbk-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],

})
export class DiagramComponent implements OnInit {
  @Input() weekDaybookList: Daybook[];
  diagramStyle = 'gridpie';
  weekdata: (TasksFilterForDiagram[])[];

  single: any[] = [
    {
      name: 'Facultatives',
      value: 3
    },
    {
      name: 'Importantes',
      value: 1
    },
    {
      name: 'Primordiales',
      value: 2,
    },
    {
      name: 'Non finies',
      value: 3,
    }
  ];
  multi = [
    {
      name: 'Lundi',
      series: [
        {
          name: 'Primordiales',
          value: 3
        },
        {
          name: 'Importantes',
          value: 1
        },
        {
          name: 'Facultatives',
          value: 4
        },
        {
          name: 'Non finies',
          value: 2
        }
      ]
    },

    {
      name: 'Mardi',
      series: [
        {
          name: 'Primordiales',
          value: 2
        },
        {
          name: 'Importantes',
          value: 1
        },
        {
          name: 'Facultatives',
          value: 1
        },
        {
          name: 'Non finies',
          value: 1
        }
      ]
    },
    {
      name: 'Mercredi',
      series: [
        {
          name: 'Primordiales',
          value: 2
        },
        {
          name: 'Importantes',
          value: 1
        },
        {
          name: 'Facultatives',
          value: 1
        },
        {
          name: 'Non finies',
          value: 4
        }
      ]
    },
    {
      name: 'Jeudi',
      series: [
        {
          name: 'Primordiales',
          value: 2
        },
        {
          name: 'Importantes',
          value: 1
        },
        {
          name: 'Facultatives',
          value: 3
        },
        {
          name: 'Non finies',
          value: 1
        }
      ]
    },
    {
      name: 'Vendredi',
      series: [
        {
          name: 'Primordiales',
          value: 2
        },
        {
          name: 'Importantes',
          value: 1
        },
        {
          name: 'Facultatives',
          value: 1
        },
        {
          name: 'Non finies',
          value: 1
        }
      ]
    },
    {
      name: 'Samedi',
      series: [
        {
          name: 'Primordiales',
          value: 1
        },
        {
          name: 'Importantes',
          value: 5
        },
        {
          name: 'Facultatives',
          value: 3
        },
        {
          name: 'Non finies',
          value: 1
        }
      ]
    },
    {
      name: 'Dimanche',
      series: [
        {
          name: 'Primordiales',
          value: 0
        },
        {
          name: 'Importantes',
          value: 0
        },
        {
          name: 'Facultatives',
          value: 1
        },
        {
          name: 'Non finies',
          value: 1
        }
      ]
    },
  ];


  view: any[] = [700, 400];


  colorScheme = {
    domain: ['#FDB393', '#E39384', '#E384AE', '#FA9E9D']
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
    this.diagramlist = [
      { label: 'GridPie', value: 'gridpie' },
      { label: 'Stackedbar', value: 'stackedBar' },
    ];
  }

  ngOnInit(): void {
    // this.weekDaybookList.map((e) => e.getNbTasksByImportance());
  }
  getMultiData() {
    return this.multi = [new DiagramMultidata('Lundi', this.weekdata[0]),
    new DiagramMultidata('Mardi', this.weekdata[1]),
    new DiagramMultidata('Mercredi', this.weekdata[2]),
    new DiagramMultidata('Jeudi', this.weekdata[3]),
    new DiagramMultidata('Vendredi', this.weekdata[4]),
    new DiagramMultidata('Samedi', this.weekdata[5]),
    new DiagramMultidata('Dimanche', this.weekdata[6])
    ];
  }
  getSingleData() {
    const reducedArray = this.weekdata.reduce((a, b) => a.concat(b));
    return [
    new TasksFilterForDiagram('Primordiales', reducedArray.filter((e) => e.name === 'Primordiales').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Importantes', reducedArray.filter((e) => e.name === 'Importantes').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Facultatives', reducedArray.filter((e) => e.name === 'Facultatives').reduce((a, b) => a + b.value, 0)),
    new TasksFilterForDiagram('Non finies', reducedArray.filter((e) => e.name === 'Non finies').reduce((a, b) => a + b.value, 0)),
    ];
  }

  onSelect(event) { }

}
