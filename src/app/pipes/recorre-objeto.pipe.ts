import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recorreObjeto'
})
export class RecorreObjetoPipe implements PipeTransform {

  transform(object:any = []): any {
    return Object.values(object);
  }

}
