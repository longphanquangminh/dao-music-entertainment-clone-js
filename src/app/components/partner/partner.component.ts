import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css',
})
export class PartnerComponent {
  partnerLogos = [
    './dist/images/Google-Partner.webp',
    './dist/images/POPS.webp',
    './dist/images/Meta.webp',
    './dist/images/DatViet-VAC.webp',
    './dist/images/Def-Jam-Recordings.webp',
    './dist/images/Sony-Music.webp',
    './dist/images/SpaceSpeakers-Group.webp',
    './dist/images/Viettel.webp',
    './dist/images/Warner-Music-Group.webp',
    './dist/images/Universal-Music-Group.webp',
  ];
}
