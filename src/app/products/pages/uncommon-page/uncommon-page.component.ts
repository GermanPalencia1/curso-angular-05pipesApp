import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  //i18nPlural
  public clients: string[] = ['Maria', ' Pedro', ' Fernando', ' Hernando', ' Melisa', ' Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Germán',
    age: 28,
    address: 'Madrid'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap((value) => console.log('tap:', value)),
  );

  //La promesa siempre se dispara aunque no estés en la página, no como el observable anterior
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa.');
      console.log('Tenemos datos en la promesa.')
    }, 3500);
  })

}
