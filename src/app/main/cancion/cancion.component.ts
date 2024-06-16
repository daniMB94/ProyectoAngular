import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.scss',
})
export class CancionComponent {
  botones = {
    play: 'play.png',
    fav: 'favorito.png',
  };
}
