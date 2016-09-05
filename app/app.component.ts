import { Component, OnInit } from '@angular/core';

import { Volume } from './volume';
import { VolumeService } from './volume.service';

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
    `,
    providers: [VolumeService]
})
export class AppComponent implements OnInit {
    title = 'Pure Volume Manager';
    volumes: Volume[];
    selectedVolume: Volume;

    constructor(private volumeService: VolumeService) {}

    ngOnInit(): void {
        this.getVolumes();
    }

    onSelect(volume: Volume): void {
        this.selectedVolume = volume;
    }

    getVolumes(): void {
        this.volumeService.getVolumes().subscribe((volumes) => this.volumes = volumes);
    }
}