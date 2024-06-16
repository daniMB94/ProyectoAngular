import { Component } from '@angular/core';
import { CancionComponent } from './cancion/cancion.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CancionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
