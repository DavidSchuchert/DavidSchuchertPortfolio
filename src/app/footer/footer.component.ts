import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Note: It should be `styleUrls` in plural
})
export class FooterComponent {

  // This should be a property to store the state
  showImpressum: boolean = true;

  constructor(private sharedService: SharedService) {
    // Subscribe to the shared impressum visibility state
    this.sharedService.showImpressum.subscribe(value => {
      this.showImpressum = value;
    });
  }

  // This is a method to toggle impressum
  openImpressum() {
    this.sharedService.toggleImpressum();
  }
}
