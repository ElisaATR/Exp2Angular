import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-detaller-heroes',
  templateUrl: './detaller-heroes.component.html',
  styleUrls: ['./detaller-heroes.component.css']
})
export class DetallerHeroesComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}