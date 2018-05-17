import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrashData } from './crash-data';

@Injectable()
export class CrashDataService {
  
  cityList: string[];
  crashData: CrashData[];
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = "https://blahblahblahblah.io";
    this.cityList = ['DUBLIN',
                     'MARYSVILLE',
                     'COLUMBUS'
    ]

    this.crashData = [
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 25, fatalities: 0},
      {city: 'DUBLIN', year: '2014', latitude: 40.206576, longitude: -83.313268, driverAge: 95, fatalities: 0}
    ];

   }

  getCityList(): string[] {
    return this.cityList;
  }

  getCrashData(): CrashData[] {
    return this.crashData;
    // return this.http.get<CrashData>(this.apiUrl);
  }

}