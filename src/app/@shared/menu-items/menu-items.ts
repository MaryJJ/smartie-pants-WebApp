import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  role: string;
}

export interface Badge {
  value: string;
  type: string;
}
const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'apps',
    role: 'any',
  },
  {
    state: 'about',
    type: 'link',
    name: 'About',
    icon: 'start',
    role: 'any',
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
