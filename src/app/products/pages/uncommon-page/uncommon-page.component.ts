import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Germán';
  public gender: 'male'|'female'|'other' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'other': 'invitarle'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

}
