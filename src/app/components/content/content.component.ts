import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from '../partner/partner.component';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, PartnerComponent, ArticlesComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
