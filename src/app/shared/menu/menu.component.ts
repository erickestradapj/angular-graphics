import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu: MenuItem[] = [
    {
      route: '/graphics/bars',
      text: 'bars',
    },
    {
      route: '/graphics/bars-double',
      text: 'bars-double',
    },
    {
      route: '/graphics/dona',
      text: 'dona',
    },
    {
      route: '/graphics/dona-http',
      text: 'dona-http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
