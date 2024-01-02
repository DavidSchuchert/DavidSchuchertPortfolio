import { Component, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // ViewChild properties to access DOM elements
  @ViewChild('myForm') myForm!: ElementRef<HTMLFormElement>;
  @ViewChild('nameField') nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('mailField') mailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField') messageField!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('sendButton') sendButton!: ElementRef<HTMLButtonElement>;

  // Properties to track privacy policy consent and the display of the success message
  showPrivacyPolicy: boolean = false;
  showSuccessMessage: boolean = false;

  // Injecting the SharedService to manage shared states like the privacy policy consent
  constructor(private sharedService: SharedService) {
    this.sharedService.showPrivacyPolicy.subscribe((value) => {
      this.showPrivacyPolicy = value;
    });
  }

  // Function to handle form submission
  async sendMail() {
    this.toggleFieldsDisabledState(true);
    await this.submitForm();
    this.clearForm();
    this.displaySuccessMessage();
  }
  // Function to enable or disable form fields and the submit button
  private toggleFieldsDisabledState(isDisabled: boolean) {
    this.nameField.nativeElement.disabled = isDisabled;
    this.mailField.nativeElement.disabled = isDisabled;
    this.messageField.nativeElement.disabled = isDisabled;
    this.sendButton.nativeElement.disabled = isDisabled;
  }

  // Function to submit form data to the server
  private async submitForm() {
    const formData = new FormData();
    formData.append('name', this.nameField.nativeElement.value);
    formData.append('mail', this.mailField.nativeElement.value);
    formData.append('message', this.messageField.nativeElement.value);

    await fetch('https://david-schuchert.de/send_mail/send_mail.php', {
      method: 'POST',
      body: formData,
    });
  }

  // Function to clear form fields and re-enable them after submission
  private clearForm() {
    this.nameField.nativeElement.value = '';
    this.mailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    this.toggleFieldsDisabledState(false);
  }

  // Function to display a success message for a brief period
  private displaySuccessMessage() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }

  // Function to toggle the disabled state of the send button based on checkbox
  checkboxCheck() {
    this.sendButton.nativeElement.disabled =
      !this.sendButton.nativeElement.disabled;
  }

  // Function to scroll the window to the top smoothly
  scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  // Function to open or close the privacy policy
  openPrivacyPolicy() {
    this.sharedService.togglePrivacyPolicy();
  }
}
