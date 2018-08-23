import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchText: string): any {
    if(searchText.length === 0) return users;    
    return users.filter((user) => {     
      return user.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1      
    });
  }

}
