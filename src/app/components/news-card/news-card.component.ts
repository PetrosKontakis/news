import { Component, OnInit, Input } from '@angular/core';
import { SourceModel } from 'src/app/models/source-model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() src: SourceModel;
  constructor() { }

  ngOnInit() {
  }

}
