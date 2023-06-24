import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { StaticJobComponent } from './components/static-job/static-job.component';

@NgModule({
  declarations: [
    AppComponent,
    IpAddressComponent,
    StaticJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
