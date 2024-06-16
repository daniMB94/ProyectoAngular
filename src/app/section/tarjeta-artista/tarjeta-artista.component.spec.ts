import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaArtistaComponent } from './tarjeta-artista.component';

describe('TarjetaArtistaComponent', () => {
  let component: TarjetaArtistaComponent;
  let fixture: ComponentFixture<TarjetaArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaArtistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
