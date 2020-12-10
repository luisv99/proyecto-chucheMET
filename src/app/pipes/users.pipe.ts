import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoU = [];
    for(const user of value){
      if(String(user.cedula).indexOf(String(arg)) > -1 ) {
        resultadoU.push(user);
      }
    }
    
    return resultadoU;
}


}
