import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'volume-manager',
    template: `
    <h1>{{ title }}</h1>
    <h2>{{ volume.name }} details:</h2>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="volume.name" placeholder="name">
    </div>
    <div><label>Size: </label>{{ volume.size }}</div>
    `
})
export class AppComponent {
    title = 'Pure Volume Manager';
    volume: Volume = {
        name: 'vol1',
        size: '100G'
    };
}

export class Volume {
    name: string;
    size: string;
}