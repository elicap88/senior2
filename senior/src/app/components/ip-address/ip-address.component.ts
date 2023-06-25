import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IpAddressService } from './service/ip-address.service';
import * as L from 'leaflet';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ipAddress } from './models/ip-address.model';
import { finalize } from 'rxjs';
import data from '../../../assets/titles.json';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css'],
})
export class IpAddressComponent implements OnInit, AfterViewInit {
  private map: any;
  title: string;
  ip: string = '';
  address!: ipAddress;
  timeZone: string = '';
  lat: number = 39.8282;
  long: number = -98.5795;
  titles = data;

  constructor(
    private ipAddress: IpAddressService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.title = 'Ip Address Tracker';
    this.matIconRegistry.addSvgIcon(
      'searchIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/ip-address-tracker-master/images/icon-arrow.svg'
      )
    );
  }

  /**
   * Inicializa el mapa con una latitud y longitud por defecto
   * @param lat
   * @param long
   */
  private initMap(lat: number, long: number): void {
    this.map = L.map('map').setView([lat, long], 13);
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    const marker = L.marker([lat, long]).addTo(this.map);
    tiles.addTo(this.map);
  }

  ngOnInit(): void {
    console.log(this.titles);
  }

  ngAfterViewInit(): void {
    this.initMap(this.lat, this.long);
  }

  /***
   * Metodo que obtiene los datos del address
   * llamando al APi
   */
  getIpAddress() {
    let ipAddress = this.ip;
    return this.ipAddress
      .getIpAddress(ipAddress)
      .pipe(finalize(() => this.getMove(this.lat, this.long)))
      .subscribe((res) => {
        this.address = res;
        this.timeZone = 'UTC' + this.address?.location?.timezone;
        this.lat = this.address?.location?.lat;
        this.long = this.address?.location?.lng;
      });
  }

  /**
   * Se encarga de mover el punto geografico del mapa
   * @param lat //Latitud
   * @param lng //Longitud
   */
  getMove(lat: number, lng: number) {
    this.map.panTo(new L.LatLng(lat, lng));
    L.marker([this.lat, this.long]).addTo(this.map);
  }
}
