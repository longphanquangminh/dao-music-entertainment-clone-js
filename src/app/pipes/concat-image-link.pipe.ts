import { Pipe, PipeTransform } from '@angular/core';
import { IMG_DIST_PATH } from '../constants/variables.constants';

@Pipe({
  standalone: true,
  name: 'concatImageLink',
})
export class ConcatImageLinkPipe implements PipeTransform {
  transform(url: string): string {
    return IMG_DIST_PATH + '/' + url;
  }
}
