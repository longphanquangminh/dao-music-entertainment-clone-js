import { Component } from '@angular/core';
import { ConcatImageLinkPipe } from '../../pipes/concat-image-link.pipe';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ConcatImageLinkPipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {}
