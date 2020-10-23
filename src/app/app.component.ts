import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  currentSearch = '';

  searching = false;

  goSearch() {
    if (!this.searching) {
      this.currentSearch = this.search;
    }
  }

  changeState(searching: boolean) {
    this.searching = searching;
  }
}
