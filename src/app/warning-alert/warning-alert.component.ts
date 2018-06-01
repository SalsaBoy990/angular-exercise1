import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
  <p class="warning-msg">Warning message</p>
  `,
  styles: [`
  .warning-msg {
    background: rgb(245, 150, 106)
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
