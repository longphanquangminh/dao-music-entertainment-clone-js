import { Component } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from '../partner/partner.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgxMasonryModule, CommonModule, PartnerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
  ];
}
