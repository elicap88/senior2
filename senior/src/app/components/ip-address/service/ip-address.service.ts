import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IpAddressService {
  private readonly _PATH_IP = 'https://geo.ipify.org/api/v2/country,city';
  constructor(private http: HttpClient) {}

  getIpAddress(ip: string): Observable<any> {
    const apiKey = 'at_Qptrp9MBOrkSY5pWTsbRPY27jrDIt';
    const ipAddress = ip;
    const path = `${this._PATH_IP}?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    return this.http.get(path).pipe(map((data) => data));
  }
}
