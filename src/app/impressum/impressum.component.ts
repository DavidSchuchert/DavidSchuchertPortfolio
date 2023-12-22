import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  showImpressum: boolean = true;

  constructor(private sharedService: SharedService) {
    // Subscribe to the shared impressum visibility state
    this.sharedService.showImpressum.subscribe(value => {
      this.showImpressum = value;
    });
  }

    toggleImpressum(){
      this.sharedService.toggleImpressum();
    }

}
