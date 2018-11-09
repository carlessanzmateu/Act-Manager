import { Component, OnInit } from '@angular/core';
import { ActsService } from '../../services/acts/acts.service';

@Component({
  selector: 'app-acts',
  templateUrl: 'acts.page.html',
  styleUrls: ['acts.page.scss']
})
export class ActsPage implements OnInit {
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
  constructor(public actsService: ActsService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    console.log(this.actsService.getActs());
  }
}
