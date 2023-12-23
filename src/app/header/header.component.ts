import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // Zustand des Overlays initialisieren
  showOverlay = false;
  hideheader = false;

  // Methode zum Umschalten des Zustands
  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
    this.hideheader = !this.hideheader;
  }



}
