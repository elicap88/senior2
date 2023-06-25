export interface ipAddress {
  ip: string;
  isp: string;
  location: Location;
}

export interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}
