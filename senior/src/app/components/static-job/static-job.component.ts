import { Component, OnInit, SimpleChanges } from '@angular/core';
import data from '../../../assets/static-job-listings-master/data.json';
import { StaticJobsService } from './services/static-jobs.service';

@Component({
  selector: 'app-static-job',
  templateUrl: './static-job.component.html',
  styleUrls: ['./static-job.component.css'],
})
export class StaticJobComponent implements OnInit {
  jobs: any[] = [];
  langs: any[] = [];
  jobsFiltered: any[] = [];
  subscription: any;

  constructor(private jobsServices: StaticJobsService) {}
  ngOnInit() {
    this.subscription = this.jobsServices.getJobs().subscribe((res) => {
      this.jobs = res[0];
      this.langs = this.getLang(res[0]);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChange(i: any) {
    const tagsSelected = i;
    this.getFilteredJobs(tagsSelected);
  }

  /**
   * Obtener los lenguajes
   * @param data
   * @returns
   */
  getLang(data: any) {
    const tags = data.reduce(
      (a: any, b: any) => [...a, ...b.languages.toString().split(',')],
      []
    );
    return tags
      .filter((x: any, index: any) => tags.indexOf(x) == index)
      .map((x: any) => ({ label: x, selected: true }));
  }

  /**Limpiar los filtros */
  clear() {
    this.ngOnInit();
  }

  /**
   * Se encarga de eliminar la etiqueta del filtro
   * y filtras los trabajos
   * @param langSelected //Valor que se escoge
   */
  getFilteredJobs(langSelected: any) {
    //Eliminar las etiquetas
    for (let j = 0; j < this.langs.length; j++) {
      if (this.langs[j].label === langSelected.label) {
        this.langs.splice(j, 1);
      }
    }
    //Filtrar por trabajos
    const jobs = this.jobs.filter((val) => {
      return val.languages.includes(langSelected.label);
    });
    this.jobs = jobs;
  }
}
