"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Pure Volume Manager';
        this.volume = {
            name: 'vol1',
            size: '100G'
        };
        this.volumes = VOLUMES;
    }
    AppComponent.prototype.onSelect = function (volume) {
        this.selectedVolume = volume;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'volume-manager',
            styles: ["\n        .selected {\n            background-color: #e34800;\n            color: #fff;\n        }\n        .volumes li {\n            border-left: 2px solid #777;\n        }\n        .volumes li:hover {\n            cursor: pointer;\n            border-left-color: #fb5000;\n        }\n    "],
            template: "\n    <h1>{{ title }}</h1>\n    <h2>All Volumes</h2>\n    <ul class=\"list-group volumes\">\n        <li class=\"list-group-item\"\n            *ngFor=\"let volume of volumes\"\n            [class.selected]=\"volume === selectedVolume\"\n            (click)=\"onSelect(volume)\">\n            <span class=\"badge\">{{ volume.size }}</span>\n            {{ volume.name }}\n        </li>\n    </ul>\n    <div *ngIf=\"selectedVolume\">\n        <h2>{{ selectedVolume.name }} details:</h2>\n        <div>\n            <label>Name: </label>\n            <input [(ngModel)]=\"selectedVolume.name\" placeholder=\"name\">\n        </div>\n        <div><label>Size: </label>{{ selectedVolume.size }}</div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var VOLUMES = [
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
var Volume = (function () {
    function Volume() {
    }
    return Volume;
}());
exports.Volume = Volume;
//# sourceMappingURL=app.component.js.map