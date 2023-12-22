import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('myForm')
  myForm!: ElementRef;

  @ViewChild('nameField')
  nameField!: ElementRef;

  @ViewChild('messageField')
  messageField!: ElementRef;

  @ViewChild('sendButton')
  sendButton!: ElementRef;

  @ViewChild('mailField')
  mailField!: ElementRef;

  showPrivacyPolicy: boolean = false;

  constructor(private sharedService: SharedService) {

    // Subscribe to the privacy policy state
    this.sharedService.showPrivacyPolicy.subscribe(value => {
      this.showPrivacyPolicy = value;
    });
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);
    //send
    await fetch('https://david-schuchert.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  checkboxCheck() {
    let sendButton = this.sendButton.nativeElement;


    if (sendButton.disabled == true) {
      sendButton.disabled = false;
    } else {
      sendButton.disabled = true;
    }
  }

scrollTop(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

openPrivacyPolicy() {
  this.sharedService.togglePrivacyPolicy();
}


}
