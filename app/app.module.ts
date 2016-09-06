import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VolumeService } from './volume.service';
import { VolumesComponent } from './volumes.component';
import { VolumeDetailComponent } from './volume-detail.component';
import { DashboardComponent } from './dashboard.component';
import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, VolumesComponent, VolumeDetailComponent, DashboardComponent ],
    providers: [VolumeService],
    bootstrap: [ AppComponent ]
})
export class AppModule {}