import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Volume } from './volume';

@Injectable()
export class VolumeService {
    private volumesUrl = '/api/v1/volumes';

    constructor(private http: Http) {}

    getVolumes(): Observable<Volume[]> {
        return this.http.get(this.volumesUrl).map(response => response.json() as Volume[]);
    }

    getVolume(name: string): Observable<Volume> {
        return this.getVolumes().map(volumes => volumes.find(volume => volume.name === name));
    }

    update(volume: any): Observable<Volume> {
        const {key, vol} = volume;
        return this.http.put(`${this.volumesUrl}/${key}`, vol).map(response => response.json())
    }

    create(volume: Volume): Observable<Volume> {
        return this.http.post(this.volumesUrl, volume).map(response => response.json());
    }

    delete(name: string): Observable<Volume> {
        return this.http.delete(`${this.volumesUrl}/${name}`).map(response => response.json());
    }
}