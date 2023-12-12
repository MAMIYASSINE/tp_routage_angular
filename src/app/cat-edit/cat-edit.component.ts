import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import * as _ from 'lodash';
import { CATS } from '../mock-cats';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit{
  cat: Cat = new Cat();
  cats = CATS;
  nom:String="";
  breed:String="";
  country:String="";
  

  constructor(private route: ActivatedRoute) {}
  /*ngOnInit(): void {
    throw new Error('Method not implemented.');
  }*/

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
