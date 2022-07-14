import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpened = !this.sideBarOpened;
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 100)
  }

}
