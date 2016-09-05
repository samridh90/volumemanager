import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VolumeDetailComponent } from './volume-detail.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, VolumeDetailComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}