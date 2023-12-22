import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  showPrivacyPolicy: boolean = false;

  constructor(private sharedService: SharedService) {

    // Subscribe to the privacy policy state
    this.sharedService.showPrivacyPolicy.subscribe(value => {
      this.showPrivacyPolicy = value;
    });
  }

  openPrivacyPolicy() {
    this.sharedService.togglePrivacyPolicy();
  }

}
