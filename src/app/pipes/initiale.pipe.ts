import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiale'
})
export class InitialePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any
  {
    const splitInitiale = value.split(' ');
    let initale: string = "";
    for (let i = 0; splitInitiale.length > i; i++)
    {
        initale = initale + splitInitiale[i][0];
    }
    // console.log(initale);
    return initale;
  }

}
