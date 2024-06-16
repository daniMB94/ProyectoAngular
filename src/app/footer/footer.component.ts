import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  iconos = {
    facebook: 'facebook.png',
    twitter: 'twitter.png',
    googleplus: 'google+.png',
    instagram: 'instagram.png',
    linkedin: 'linkedin.png',
    pinterest: 'pinterest.png',
  };
}
