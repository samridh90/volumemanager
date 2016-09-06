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
        <button (click)="goBack()">Back</button>
        <button (click)="save()">Save</button>
    </div>
    `
})
export class VolumeDetailComponent implements OnInit {
    @Input() volume: Volume;
    name: string;

    constructor(private volumeService: VolumeService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.name = params['name'];
            this.volumeService.getVolume(this.name)
                .subscribe(volume => this.volume = volume);
        });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.volumeService.update({key: this.name, vol: this.volume}).subscribe(() => this.goBack());
    }
}