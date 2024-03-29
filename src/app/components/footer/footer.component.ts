import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMG_DIST_PATH, ROOT_WEB } from '../../constants/variables.constants';
import { ConcatImageLinkPipe } from '../../pipes/concat-image-link.pipe';
import { NewLinePipe } from '../../pipes/new-line.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ConcatImageLinkPipe, NewLinePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  rootWebUrl = ROOT_WEB;
  imgDistPath = IMG_DIST_PATH;
  rootWebLogoUrl = 'logo.svg';
  partnerLogoUrls = ['icon-google.svg', 'icon-meta.svg'];
  fbRootWeb = 'https://www.facebook.com/daomusicentertainment';
  socialMediaLogo = [
    {
      url: 'https://www.linkedin.com/company/dao-entertainment',
      imgSrc: 'iocn-in-black.svg',
    },
    {
      url: this.fbRootWeb,
      imgSrc: 'icon-fb-black.svg',
    },
    {
      url: 'https://www.instagram.com/daomusicentertainment',
      imgSrc: 'icon-ins-black.svg',
    },
    {
      url: 'https://www.youtube.com/DAOEntertainment',
      imgSrc: 'icon-youtube-black.svg',
    },
    {
      url: this.fbRootWeb,
      imgSrc: 'icon-tiktok-black.svg',
    },
  ];
  branchAddresses = [
    {
      name: 'Ho Chi Minh',
      address:
        'AP Tower Building, 518B Dien Bien Phu, Ward 21, Binh Thanh District, Ho Chi Minh City',
    },
    {
      name: 'Ha Noi',
      address: 'Toong Space, 05 Dien Bien Phu, Ba Dinh District, Ha Noi',
    },
  ];
  companyInfo = [
    '© 2024 All rights reserved',
    'DAO Music Entertainment Co. Ltd',
    'Сorporation number : 0316315038',
  ];
}
