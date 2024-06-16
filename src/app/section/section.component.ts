import { Component } from '@angular/core';
import { TarjetaArtistaComponent } from './tarjeta-artista/tarjeta-artista.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [TarjetaArtistaComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  cancion = {
    caratula: 'portada del album.jpg',
  };
}
