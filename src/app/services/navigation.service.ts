import { Injectable } from '@angular/core';
import { NavigationItem } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getNavigationItems(): NavigationItem[] {
    return [
      {
        label: 'Home',
        path: '/'
      },
      {
        label: 'Services',
        children: [
          { label: 'Chat', path: '/chat' },
          { label: 'Call', path: '/call' },
          { label: 'Appointment', path: '/appointment' }
        ]
      },
      {
        label: 'About',
        path: '/about'
      },
      {
        label: 'Contact',
        path: '/contact'
      }
    ];
  }
}
