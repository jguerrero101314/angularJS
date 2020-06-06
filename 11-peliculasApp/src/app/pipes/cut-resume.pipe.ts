import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutResume'
})
export class CutResumePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 250){
      value = value.substr(0,250)+" . . .";
    }
    return value;
  }

}
