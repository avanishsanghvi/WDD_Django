import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzInputModule } from 'ng-zorro-antd/input';


import { NzIconModule } from 'ng-zorro-antd/icon';

import en from '@angular/common/locales/en';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { VideoCardComponent } from './video-card/video-card.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { TestModelsComponent } from './test-models/test-models.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TrainModelsComponent } from './train-models/train-models.component';


//APIS





registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    VideoCardComponent,
    TestModelsComponent,
    TrainModelsComponent,
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzTableModule,
    NzIconModule,
    NgbModule,
    NzCardModule,
    NzUploadModule,
    NzDescriptionsModule,
    NzGridModule,
    NzButtonModule,
    NzSwitchModule,
    NzAffixModule,
    NzInputModule,
    

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
