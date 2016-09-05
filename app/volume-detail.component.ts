import { Component, Input } from '@angular/core';
import { Volume } from './volume';

@Component({
    selector: 'volume-detail',
    template:`
    <div *ngIf="volume">
        <h2>{{ volume.name }} details:</h2>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="volume.name" placeholder="name">
        </div>
        <div><label>Size: </label>{{ volume.size }}</div>
    </div>
    `
})
export class VolumeDetailComponent {
    @Input() volume: Volume;
}