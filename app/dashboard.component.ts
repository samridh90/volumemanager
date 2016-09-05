import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Volume } from './volume';
import { VolumeService } from './volume.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    template: `
    <h3>Top Volumes</h3>
    <div class="well">
        <div *ngFor="let volume of volumes" (click)="gotoDetail(volume)" class="card">
            <div>{{ volume.name }}</div>
        </div>
    </div>
    `
})
export class DashboardComponent implements OnInit {
    volumes: Volume[] = [];

    constructor(private volumeService: VolumeService, private router: Router) { }

    ngOnInit(): void {
        this.volumeService.getVolumes()
            .subscribe(volumes => this.volumes = volumes.slice(1, 5));
    }

    gotoDetail(volume: Volume): void {
        let link = ['/detail', volume.name];
        this.router.navigate(link);
    }
}