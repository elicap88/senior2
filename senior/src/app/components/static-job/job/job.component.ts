import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  jobs: any;
  jobsData: any;
  tagsFilter: any;
  @Output() filterChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() set job(data: any) {
    this.jobs = data;
    this.getModLanguages();
  }

  @Input() langs: any;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Convertir el array de string de lenguajes
   * para poder recorrerlo
   */
  getModLanguages() {
    const LONGITUD_PEDAZOS = 3;
    for (let j = 0; j < this.jobs.length; j++) {
      let pedazo = this.jobs[j].languages.slice(0, j + LONGITUD_PEDAZOS);
      this.jobs[j].languages = pedazo;
    }
  }

  /**
   * Filtrar los jobs
   * por el lenaguaje seleccionado
   * @param tagsSelected
   */
  getFilteredJobs(langSelected: any) {
    let bookFilteredList: any;
    bookFilteredList = this.jobs.filter((job: any) => {
      return job.languages[0] === langSelected;
    });
    this.jobs = bookFilteredList;
  }
  /**
   * Llama al servicio de filtrado
   * al seleccionar un lenguaje
   * @param i
   */
  onChange(i: any) {
    const tagsSelected = i;
    this.getFilteredJobs(tagsSelected);
  }
}
