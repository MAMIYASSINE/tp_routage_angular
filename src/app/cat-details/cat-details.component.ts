import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import * as _ from 'lodash';
import { CATS } from '../mock-cats';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat = new Cat();
  cats = CATS;

  constructor(private route: ActivatedRoute) {}

  getCatById(id: number) {
    const index = _.findIndex(this.cats, (c: Cat) => c.id === id);
    this.cat = this.cats[index];
    console.log(this.cat);
  }

  ngOnInit() {
    let idFromRoute =+this.route.snapshot.paramMap.get('id')!;
    if (idFromRoute) {
      this.getCatById(idFromRoute);
    }
  }
}
