import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul>
      <li routerLink="todo" routerLinkActive="active">todo</li>
      <li routerLink="about" routerLinkActive="active">about</li>
    </ul>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
