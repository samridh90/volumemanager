import { Component } from '@angular/core';

@Component({
    selector: 'volume-manager',
    template: `
    <h1>{{ title }}</h1>
    <ul class="nav nav-pills">
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/volumes" routerLinkActive="active">Volumes</a></li>
    </ul>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Pure Volume Manager';
}