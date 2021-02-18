import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  defects: string;
  location: string;
  defectArea: string;
  confidence: string;
}
@Component({
  selector: 'app-test-models',
  templateUrl: './test-models.component.html',
  styleUrls: ['./test-models.component.scss']
})
export class TestModelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hGutter = 16;
  vGutter = 16;
  listOfData: Person[] = [
    {
      key: '1',
      defects: 'Linear Crack',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence: '87%',
    },
    {
      key: '2',
      defects: 'Porosity',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence: '50%',
    },
    {
      key: '3',
      defects: 'Given Data',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence: '60%',
    },
  ];

}
