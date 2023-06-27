import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { StaticJobComponent } from './components/static-job/static-job.component';

const routes: Routes = [
  {
    path: 'ip-address',
    component: IpAddressComponent,
  },
  {
    path: 'static-job',
    component: StaticJobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
