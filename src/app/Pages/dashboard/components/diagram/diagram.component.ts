import { Component, OnInit, Input } from '@angular/core';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  @Input() weekDaybookList: Daybook[];
  diagramStyle = 'gridpie';

  single: any[] = [
    {
      name : 'Facultatives',
      value: 3
    },
    {
      name : 'Importantes',
      value : 1
    },
    {
      name : 'Primordiales',
      value : 2,
    },
    {
      name : 'Non finies',
      value : 3,
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


  view: any[] = [ 700, 400];


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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

  constructor() {

  }


  ngOnInit(): void {}

  onSelect(event) {}

}
