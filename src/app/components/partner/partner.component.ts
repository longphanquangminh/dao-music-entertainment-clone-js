import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConcatImageLinkPipe } from '../../pipes/concat-image-link.pipe';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule, ConcatImageLinkPipe],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css',
})
export class PartnerComponent {
  partnerLogos = [
    'Google-Partner.webp',
    'POPS.webp',
    'Meta.webp',
    'DatViet-VAC.webp',
    'Def-Jam-Recordings.webp',
    'Sony-Music.webp',
    'SpaceSpeakers-Group.webp',
    'Viettel.webp',
    'Warner-Music-Group.webp',
    'Universal-Music-Group.webp',
  ];
}
