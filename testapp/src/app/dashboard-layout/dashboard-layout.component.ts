import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
interface Person {
  key: string;
  defects: string;
  location: string;
  defectArea: string;
  confidence: string;
}
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  ngOnInit(): void {}
  //constructor(private msg: NzMessageService) {}

  // handleChange(info: NzUploadChangeParam): void {
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     this.msg.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     this.msg.error(`${info.file.name} file upload failed.`);
  //   }
  // }

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
  // handleChange(info: NzUploadChangeParam): void {
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     this.msg.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     this.msg.error(`${info.file.name} file upload failed.`);
  //   }
  // }
}
