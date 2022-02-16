import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cast'
})
export class CastPipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
