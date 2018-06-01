import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
  <p class="red">Warning message</p>
  `,
  styles: [`
  .red {
    color: rgb(126, 9, 9)
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
