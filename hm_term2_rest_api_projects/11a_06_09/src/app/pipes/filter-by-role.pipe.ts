import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRole'
})
export class FilterByRolePipe implements PipeTransform {

  transform(users: any[], role: any){
    if(role == "parent"){
      return true;
    }

    return false;
    
    //return users.filter(us => us.role == "parent")
  }
}
