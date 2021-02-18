import { Component, OnInit } from '@angular/core';

import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-train-models',
  templateUrl: './train-models.component.html',
  styleUrls: ['./train-models.component.scss']
})
export class TrainModelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      
    } else if (status === 'error') {
      
    }
  }

}
