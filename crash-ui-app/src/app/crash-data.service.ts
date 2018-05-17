import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrashData } from './crash-data';

@Injectable()
export class CrashDataService {
  
  distOptions: number[];
  crashData: CrashData[];
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = "https://blahblahblahblah.io";
    this.distOptions = [5,10,15,20];

    this.crashData = [
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 25, fatalities: 0},
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 95, fatalities: 0}
    ];

   }

  getDistOptions(): string[] {
    return this.distOptions;
  }

  getCrashData(): CrashData[] {
    return this.crashData;
    // return this.http.get<CrashData>(this.apiUrl);
  }

}
