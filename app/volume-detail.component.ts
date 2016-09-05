import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Volume } from './volume';
import { VolumeService } from './volume.service';

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
export class VolumeDetailComponent implements OnInit {
    @Input() volume: Volume;

    constructor(private volumeService: VolumeService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['name'];
            this.volumeService.getVolume(name)
                .subscribe(volume => this.volume = volume);
        });
    }
}