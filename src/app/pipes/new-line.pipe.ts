import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'newLine',
})
export class NewLinePipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    let result = '';
    let startPos = 0;
    let endPos = 0;

    while (endPos < value.length) {
      let remainingChars = value.length - endPos;
      let chunkLength = remainingChars < maxLength ? remainingChars : maxLength;

      let substr = value.substr(endPos, chunkLength);
      let lastSpaceIndex = substr.lastIndexOf(' ');

      if (
        lastSpaceIndex !== -1 &&
        endPos + lastSpaceIndex - startPos <= maxLength
      ) {
        result += value.substring(startPos, endPos + lastSpaceIndex + 1) + '\n';
        startPos = endPos + lastSpaceIndex + 1;
        endPos = startPos;
      } else {
        result +=
          value.substring(startPos, startPos + chunkLength).trim() + '\n';
        startPos += chunkLength;
        endPos = startPos;
      }
    }

    return result;
  }
}
