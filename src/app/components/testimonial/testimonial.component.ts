import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {


  title = 'Some of our users';
  subtitle = 'Hear what our users have to say';

  testimonialData = [
    {
      quoteImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/right-quotation-mark.svg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.',
      profileImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-1.jpg',
      name: 'John Doe',
      position: 'CTO - Operations'
    },
    {
      quoteImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/right-quotation-mark.svg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.',
      profileImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-2.jpg',
      name: 'Jane Doe',
      position: 'Lead Developer'
    },
    {
      quoteImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/right-quotation-mark.svg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.',
      profileImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-3.jpg',
      name: 'Mary Smith',
      position: 'Product Manager'
    },
    {
      quoteImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/right-quotation-mark.svg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.',
      profileImg: 'https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/single-brand-themes/images/team-profile-4.jpg',
      name: 'James Brown',
      position: 'CEO'
    }
  ];
}
