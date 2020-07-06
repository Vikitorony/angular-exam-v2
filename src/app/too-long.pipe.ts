import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooLong'
})
export class TooLongPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value.length > 17) {
      return (value.slice(0, 17) + '...');
    }
  }

}
