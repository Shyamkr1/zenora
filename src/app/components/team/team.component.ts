import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TeamMember {
  imageUrl: string;
  name: string;
  position: string;
  detail: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {


  teamMembers: TeamMember[] = [
    {
      imageUrl: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-1.jpg',
      name: 'John Doe',
      position: 'CTO - Founder',
      detail: 'We are a group of professionals dedicated to their work',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe'
      }
    },
    {
      imageUrl: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-2.jpg',
      name: 'Jane Smith',
      position: 'CTO - Tech',
      detail: 'We are a group of professionals dedicated to their work',
      socialLinks: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith'
      }
    },
    {
      imageUrl: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-3.jpg',
      name: 'Bob Johnson',
      position: 'CTO - Financial',
      detail: 'We are a group of professionals dedicated to their work',
      socialLinks: {
        facebook: 'https://facebook.com/bobjohnson',
        twitter: 'https://twitter.com/bobjohnson',
        instagram: 'https://instagram.com/bobjohnson',
        linkedin: 'https://linkedin.com/in/bobjohnson'
      }
    },
    {
      imageUrl: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-4.jpg',
      name: 'Alice Williams',
      position: 'CTO - Operations',
      detail: 'We are a group of professionals dedicated to their work',
      socialLinks: {
        facebook: 'https://facebook.com/alicewilliams',
        twitter: 'https://twitter.com/alicewilliams',
        instagram: 'https://instagram.com/alicewilliams',
        linkedin: 'https://linkedin.com/in/alicewilliams'
      }
    }
  ];
}
