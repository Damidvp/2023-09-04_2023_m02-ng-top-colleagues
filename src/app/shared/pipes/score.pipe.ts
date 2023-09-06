import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): unknown {
    if(value){
      if(value>=0){
        return "+"+value;
      } else {
        return value;
      }
    } else {
      return value;
    }

  }

}
