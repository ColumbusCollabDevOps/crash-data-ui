import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

import { CrashDataService } from '../crash-data.service';
import { CrashDataResponse } from '../crash-data-response';

import { CrashData } from '../crash-data';

@Component({
  selector: 'app-crash-query',
  templateUrl: './crash-query.component.html',
  styleUrls: ['./crash-query.component.css']
})
export class CrashQueryComponent implements OnInit {

  distOptions: number[];
  distance: number;
  latitude: number;
  longitude: number;
  displayedColumns: string[];
  crashData: CrashData[]; 
  dataSource: any;

  constructor(private crashDataService: CrashDataService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.distance = 1;
    this.crashData = [];
    this.distOptions = this.crashDataService.getDistOptions();

    // this.crashData = this.crashDataService.getCrashData();
    /* Use the line below to set this.crashData when we make a actual API call */
    this.crashDataService.getCrashData().subscribe( (data: CrashDataResponse) =>
     data.results.forEach( result => {
      let crashEventRecord = <CrashData>{};
      crashEventRecord.city = result.obj.ODOT_CITY_VILLAGE_TWP_NME;
      crashEventRecord.year = result.obj.CRASH_YR;
      crashEventRecord.latitude = result.obj.ODOT_LATITUDE_NBR;
      crashEventRecord.longitude = result.obj.ODOT_LONGITUDE_NBR;
      crashEventRecord.driverAge = result.obj.U2_AGE_NBR;
      crashEventRecord.fatalities = result.obj.ODPS_TOTAL_FATALITIES_NBR;
      this.crashData.push(crashEventRecord);
    }));

    this.dataSource = new MatTableDataSource(this.crashData);

    this.displayedColumns = ['city',
                             'year',
                             'latitude',
                             'longitude',
                             'driverAge',
                             'fatalities'];
  }

}
