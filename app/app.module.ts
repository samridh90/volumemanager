import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { VolumeService } from './volume.service';
import { VolumesComponent } from './volumes.component';
import { VolumeDetailComponent } from './volume-detail.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, VolumesComponent, VolumeDetailComponent, DashboardComponent ],
    providers: [VolumeService],
    bootstrap: [ AppComponent ]
})
export class AppModule {}