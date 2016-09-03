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
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'volume-manager',
            template: "\n    <h1>{{ title }}</h1>\n    <h2>{{ volume.name }} details:</h2>\n    <div>\n        <label>Name: </label>\n        <input [(ngModel)]=\"volume.name\" placeholder=\"name\">\n    </div>\n    <div><label>Size: </label>{{ volume.size }}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Volume = (function () {
    function Volume() {
    }
    return Volume;
}());
exports.Volume = Volume;
//# sourceMappingURL=app.component.js.map