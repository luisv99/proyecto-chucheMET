import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoF = [];
    for(const item of value){
      if(item.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultadoF.push(item);
      }
    }
    return resultadoF;
  }

}
