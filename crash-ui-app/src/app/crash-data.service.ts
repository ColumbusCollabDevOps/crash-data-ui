import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Interfaces */
import { CrashData } from './crash-data';
import { CrashDataRequest } from './crash-data-request';
import { CrashDataResponse } from './crash-data-response';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class CrashDataService {
  
  distOptions: number[];
  latitude: number;
  longitude: number;
  crashSearchRadius: number;
  crashData: CrashData[];
  apiUrl: string;
  crashDataDataRequest: CrashDataRequest;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = "https://6iqb7rxtrk.execute-api.us-east-2.amazonaws.com/Prod/";
    this.latitude = 0;
    this.longitude = 0;
    this.crashSearchRadius = 1;
    this.distOptions = [1, 5, 10, 15, 20];

    this.crashData = [
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 25, fatalities: 0},
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 95, fatalities: 0}
    ];

    this.crashDataDataRequest = {
      geoNear: "crashdata",
      near: {
        type: "Point",
        coordinates: [ this.longitude, this.latitude]
      },
      spherical: true,
      maxDistance: this.crashSearchRadius
    };

   }

  getDistOptions(): number[] {
    return this.distOptions;
  }

  setSearchRadius(newDist: number) {
    this.crashSearchRadius = newDist;
  }

  setCoordinates(newLat: number, newLon: number) {
    this.longitude = newLon;
    this.latitude = newLat;
  }

  //Uncomment line below to return observable
  //getCrashData(): Observable<CrashDataResponse> {
  getCrashData(): CrashData[] {
    return this.crashData;
    // return this.http.get<CrashDataRequest>(this.apiUrl);
  }

}
