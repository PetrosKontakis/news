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
  sourceList: Array<SourceModel>;

  constructor(public api: ApiService) { }

  ngOnInit() {
    console.log(this.api)
    this.state = STATES.LOADING;
    this.api.getSources().subscribe((response) => {
      console.log(response);
      if (response.status === "ok") {
        this.state = STATES.NORMAL;
        return this.sourceList  = response.sources.map((src)=> new SourceModel(src))
      }
    })
  }

  searchBy() {
    
  }

}
