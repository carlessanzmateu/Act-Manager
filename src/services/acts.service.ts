import { Injectable } from '@angular/core';
import { Act } from '../models/act.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  acts: Act[] = [
    {
      id: 1,
      location: 'Plaza de la iglesia',
      date: new Date(),
      type: 'Pasodobles',
      info: 'traed pasacalles',
      clothes: 'traje completo',
      musicians: []
    },
    {
      id: 2,
      location: 'En la banda',
      date: new Date(),
      type: 'Procesión',
      info: 'Vamos a tocar la saeta y mater mea',
      clothes: 'traje completo',
      musicians: []
    }
  ];

  constructor() { }

  getActs() {
    return this.acts;
  }
}