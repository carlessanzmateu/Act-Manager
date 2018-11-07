import { Component, OnInit } from '@angular/core';
import { RehearsalsService } from '../services/rehearsals/rehearsals.service';

@Component({
  selector: 'app-rehearsals',
  templateUrl: 'rehearsals.page.html',
  styleUrls: ['rehearsals.page.scss']
})
export class RehearsalsPage implements OnInit {
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public rehearsalsService: RehearsalsService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    console.log(this.rehearsalsService.getRehearsals());
  }
}
