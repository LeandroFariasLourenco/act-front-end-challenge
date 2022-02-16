import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consoleLog'
})
export class ConsoleLogPipe implements PipeTransform {
  transform(valor: any): void {
    console.log(valor);
  }
}
