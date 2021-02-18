import { Component } from '@angular/core';
// let Person = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park'
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park'
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park'
//   }
// ];
interface Person {
  key: string;
  defects: string;
  location: string;
  defectArea: string;
  confidence: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Defect-Detection-Client';
  
  listOfData: Person[] = [
    {
      key: '1',
      defects: 'Linear Crack',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence:'87%',
    },
    {
      key: '2',
      defects: 'Porosity',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence:'50%',
    },
    {
      key: '3',
      defects: 'Given Data',
      location: 'X:35 Y:86',
      defectArea: 'W:33 H:56',
      confidence:'60%',
    }
  ];
}
