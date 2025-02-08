import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface NavigationItem {
  label: string; // Display text for the navigation item
  path?: string; // Router link (optional)
  children?: NavigationItem[]; // Sub-navigation items (optional)
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navigationItems: NavigationItem[] = [];
  isMobileMenuOpen: boolean = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }

  toggleSubMenu(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
