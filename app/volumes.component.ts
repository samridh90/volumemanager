import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Volume } from './volume';
import { VolumeService } from './volume.service';

@Component({
    moduleId: module.id,
    selector: 'volumes',
    styleUrls: ['volumes.component.css'],
    templateUrl: 'volumes.component.html'
})
export class VolumesComponent implements OnInit {
    volumes: Volume[];
    selectedVolume: Volume;

    constructor(private volumeService: VolumeService, private router: Router) {}

    ngOnInit(): void {
        this.getVolumes();
    }

    onSelect(volume: Volume): void {
        this.selectedVolume = volume;
    }

    getVolumes(): void {
        this.volumeService.getVolumes().subscribe((volumes) => this.volumes = volumes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedVolume.name]);
    }
}