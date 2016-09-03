import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'volume-manager',
    styles: [`
        .selected {
            background-color: #e34800;
            color: #fff;
        }
        .volumes li {
            border-left: 2px solid #777;
        }
        .volumes li:hover {
            cursor: pointer;
            border-left-color: #fb5000;
        }
    `],
    template: `
    <h1>{{ title }}</h1>
    <h2>All Volumes</h2>
    <ul class="list-group volumes">
        <li class="list-group-item"
            *ngFor="let volume of volumes"
            [class.selected]="volume === selectedVolume"
            (click)="onSelect(volume)">
            <span class="badge">{{ volume.size }}</span>
            {{ volume.name }}
        </li>
    </ul>
    <div *ngIf="selectedVolume">
        <h2>{{ selectedVolume.name }} details:</h2>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="selectedVolume.name" placeholder="name">
        </div>
        <div><label>Size: </label>{{ selectedVolume.size }}</div>
    </div>
    `
})
export class AppComponent {
    title = 'Pure Volume Manager';
    volume: Volume = {
        name: 'vol1',
        size: '100G'
    };
    volumes = VOLUMES;
    selectedVolume: Volume;

    onSelect(volume: Volume): void {
        this.selectedVolume = volume;
    }
}

const VOLUMES: Volume[] = [
    { name: 'vol1', size: '100G' },
    { name: 'vol2', size: '101G' },
    { name: 'vol3', size: '102G' },
    { name: 'vol4', size: '103G' },
    { name: 'vol5', size: '104G' },
    { name: 'vol6', size: '105G' },
    { name: 'vol7', size: '106G' },
    { name: 'vol8', size: '107G' },
    { name: 'vol9', size: '108G' },
    { name: 'vol10', size: '109G' },
];

export class Volume {
    name: string;
    size: string;
}