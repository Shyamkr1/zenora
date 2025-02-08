import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private jsonUrl = 'assets/footer-data.json'; // Path to your JSON file

  // constructor(private http: HttpClient) { }

  getFooterData(): Observable<any> {
    return of({
      "company": "Your Company Name",
      "companyLinks": [
        { "text": "About Us" },
        { "text": "Contact" },
        { "text": "Locations" },
        { "text": "Career" }
      ],
      "joinMessage": "PLEASE JOIN US AND SPREAD THE LOVE",
      "joinDescription": "Be the first to know about our new arrivals and exclusive offers",
      "socialLinks": [
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/facebook.png"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/instagram.png"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/whatsapp.png"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/youtube.png"
        }
      ],
      "helpLinks": [
        { "text": "Workshops" },
        { "text": "FAQ's" },
        { "text": "Privacy Policy" },
        { "text": "Terms & Conditions" }
      ],
      "paymentMethods": [
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/cod-logo.svg"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/master-card-icon.svg"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/net-banking-icon.svg"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/upi-icon.svg"
        },
        {
          "img": "https://assets.hyperinvento.com/hyperinventory_admin/dynamic-home-assets/common/visa-logo-icon.svg"
        }
      ],
      "copyright": "©2024 MHM Healthcare pvt. ltd."
    }
    )
  }
}
