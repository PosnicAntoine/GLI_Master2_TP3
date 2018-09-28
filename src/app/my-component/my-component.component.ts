import { Component, OnInit } from '@angular/core';
import { Pukimon } from './pukimon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  idPukimon: string = '';
  namePukimonSelected: string;
  filtre: string = '';
  listPukimon: Pukimon[] = [new Pukimon(25,"Pikachu"), new Pukimon(1,"Not Pikachu")];


  constructor() { }

  ngOnInit() {
  }

}
