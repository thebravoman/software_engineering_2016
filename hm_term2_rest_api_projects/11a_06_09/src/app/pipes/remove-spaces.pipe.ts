import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: any){
      return value.replace(/ /g, "");
    }
  }

