import { Component } from '@angular/core';
import { Volume } from './volume';

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
    <volume-detail [volume]="selectedVolume"></volume-detail>
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