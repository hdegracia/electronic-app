import { Component, OnInit, Input } from '@angular/core';
import { MarcasService } from '../../marcas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcas } from '../../marcas';
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public marcas: Marcas = new Marcas()

  constructor(private marcasService: MarcasService,
    private router: Router,
    private alertCrtrl: AlertController,
    private activatedRoute: ActivatedRoute) { 



    }
    errores: string[];




  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.marcasService.getMarca(id).subscribe((marcas) => this.marcas = marcas);
      }
    });

   // this.marcasService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }
  
  cargarMarca(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.marcasService.getMarca(id).subscribe((marcas) => this.marcas = marcas);
      }
    })
  }

  async deleteMarca() {

    const alertElement = await this.alertCrtrl.create({
      header: "Esta seguro de eliminar el registro?...",
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.marcasService.delete(this.marcas.id).subscribe((marcas) => this.marcas = marcas);
          this.router.navigate(['/marcas'])
        }
      }
    ]
    });
    await alertElement.present();
  }

  update(): void {
    console.log(this.marcas)
    this.marcasService.update(this.marcas)
      .subscribe(
        json => {
          this.router.navigate(['/marcas']);
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

  create(): void {
    console.log(this.marcas)
    this.marcasService.create(this.marcas)
      .subscribe(
        marcas => {
          this.router.navigate(['/marcas']);
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
