import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  aboutUsData = [
    {
      title: 'Know about us',
      subtitle: 'The Overachievers Summer Faves Makeup Set',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sint. Nesciunt voluptatem, totam eius repudiandae ullam dolores suscipit rem quisquam! Hic culpa dolor unde repellat explicabo cumque sit asperiores consequuntur.'
    },
    {
      title: 'Our Mission',
      subtitle: 'Empowering Beauty & Confidence',
      content: 'Our mission is to provide high-quality makeup that not only enhances your appearance but also boosts your confidence.'
    }
    // Add more sections here if needed
  ];
}
