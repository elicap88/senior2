import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { IpAddressService } from './ip-address.service';

fdescribe('IpAddressService', () => {
  let ipService: IpAddressService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ipService],
    });
    ipService = TestBed.inject(IpAddressService);
  });

  it('should be created', () => {
    expect(ipService).toBeTruthy();
  });

  it('should get data ip address', () => {
    //Arrange
    //Act
    ipService.getIpAddress().subscribe((data) => {});
    //Assert
  });
});
