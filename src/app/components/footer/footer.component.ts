import { Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  footerData: any = {};

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe((data) => {
      this.footerData = data;
    });
  }
}
