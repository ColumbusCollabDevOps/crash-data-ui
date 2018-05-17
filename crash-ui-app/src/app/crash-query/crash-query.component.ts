import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

import { CrashDataService } from '../crash-data.service';

import { CrashData } from '../crash-data';

@Component({
  selector: 'app-crash-query',
  templateUrl: './crash-query.component.html',
  styleUrls: ['./crash-query.component.css']
})
export class CrashQueryComponent implements OnInit {

  cityList: string[];
  displayedColumns: string[];
  crashData: CrashData[];
  dataSource: any;

  constructor(private crashDataService: CrashDataService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.cityList = this.crashDataService.getCityList();

    this.crashData = this.crashDataService.getCrashData();
    /* Use the line below to set this.crashData when we make a actual API call */
    //this.crashDataService.getCrashData().subscribe((data: CrashData) => this.crashData = data);

    this.dataSource = new MatTableDataSource(this.crashData);

    this.displayedColumns = ['city',
                             'year',
                             'latitude',
                             'longitude',
                             'driverAge',
                             'fatalities'];
  }

}
