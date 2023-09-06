import { Pipe, PipeTransform } from '@angular/core';

//Este pipe hará lo siguiente:
/*
  germán | toggleCase = 'GERMÁN'
  GERMÁN | toggleCase = 'germán'
*/

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
