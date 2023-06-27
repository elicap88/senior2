import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import data from '../../../../assets/static-job-listings-master/data.json';

@Injectable({
  providedIn: 'root',
})
export class StaticJobsService {
  private readonly _PATH_IP = 'https://geo.ipify.org/api/v2/country,city';
  data: any;
  constructor(private http: HttpClient) {}

  getJobs2() {
    const path = `${this._PATH_IP}`;
    return this.http.get(path).subscribe((data) => {
      this.data = data;
    });
  }

  getJobs() {
    return of([data]).pipe(delay(1000));
  }
}
