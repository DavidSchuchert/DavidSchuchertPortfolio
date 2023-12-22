import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Using BehaviorSubject to hold the current state of the impressum visibility
  private _showImpressum = new BehaviorSubject<boolean>(false);
  public showImpressum = this._showImpressum.asObservable();


  private _showPrivacyPolicy = new BehaviorSubject<boolean>(false);
  public showPrivacyPolicy = this._showPrivacyPolicy.asObservable();


  constructor() {}

  toggleImpressum() {
    // Toggle the current value
    this._showImpressum.next(!this._showImpressum.value);
  }

  togglePrivacyPolicy() {
    this._showPrivacyPolicy.next(!this._showPrivacyPolicy.value);
  }


}
