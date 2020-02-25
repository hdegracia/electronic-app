import { Component } from '@angular/core';
import { Marcas } from '../marcas/marcas';
import { MarcasService } from '../marcas/marcas.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo:string= "Inicio"
  marcas: Marcas[];


  constructor(private marcasService: MarcasService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.marcasService.getMarcas().subscribe(
      marcas => this.marcas = marcas
    );

  }

}
