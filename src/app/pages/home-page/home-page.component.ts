import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SourceModel } from 'src/app/models/source-model';

enum STATES {
  LOADING,
  SERVER_ERROR,
  NORMAL
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  state: number;
  STATES = STATES;
  sourceFiltered: Array<SourceModel>;
  page: number;
  slectedCategory: string;
  private sourceList: Array<SourceModel>;
  private pageStep = 9;
  private terms: string;


  constructor(private api: ApiService) {
    this.page = 0;
  }

  ngOnInit() {


    this.state = STATES.LOADING;
    this.api.getSources().subscribe((response) => {
      if (response.status === "ok") {
        this.state = STATES.NORMAL;
        this.sourceList = response.sources.map((src) => new SourceModel(src))
        this.setSource(false, "");
        return;
      }
      this.state = STATES.SERVER_ERROR;

    })
  }

  onSearchChange(value: string) {
    this.page = 0;
    this.terms = value;
    this.setSource(false, value);
  }



  setNextPage(lazy: boolean): void {
    this.page++;
    this.setSource(lazy, this.terms);

  }
  setPreviewsPage(): void {
    this.page--;
    this.setSource(false, this.terms)
  }

  setSource(lazy: boolean, terms: string) {

    let sourceFiltered = this.sourceList;

    // filtering by name
    if (terms) {
      sourceFiltered = this.sourceList.filter(src => {
        return src.name.toLowerCase().includes(terms.toLowerCase())
      })
    }

    // Paging to data
    let pageStart: number;
    if (lazy) {
      pageStart = 0;
    } else {
      pageStart = this.page * this.pageStep;

    }
    const pageEnd = (this.page + 1) * this.pageStep;
    this.sourceFiltered = sourceFiltered.slice(pageStart, pageEnd)
  }

}
