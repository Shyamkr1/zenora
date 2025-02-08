import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent, TestimonialComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
