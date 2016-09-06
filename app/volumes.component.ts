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

    add(name: string, size: string): void {
        name = name.trim();
        size = size.trim();
        if (!name || !size) {
            return;
        }
        this.volumeService.create({name, size}).subscribe(volume => {
            this.volumes.push(volume);
            this.selectedVolume = null;
        });
    }

    delete(volume: Volume): boolean {
        this.volumeService.delete(volume.name).subscribe(volume => {
            this.getVolumes();
            this.selectedVolume = null;
        });
        return false;
    }
}