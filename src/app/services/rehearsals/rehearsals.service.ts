import { Injectable } from '@angular/core';
import { Rehearsal } from '../../../models/rehearsal.model';

@Injectable({
  providedIn: 'root'
})
export class RehearsalsService {

  constructor() { }

  acts: Rehearsal[] = [
    {
      id: 1,
      location: 'Musical Banda Primitiva',
      date: new Date(),
      info: 'Vamos a mirar un poco de calle y de charanga',
      musicians: []
    },
    {
      id: 2,
      location: 'Musical Amics de la música de Alfafar',
      date: new Date(),
      info: 'Preparando el concierto de Santa Cecilia',
      musicians: []
    }
  ];

  getRehearsals() {
    return this.acts;
  }
}
