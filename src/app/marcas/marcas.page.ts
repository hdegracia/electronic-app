import { Component, OnInit } from "@angular/core";
import { Marcas } from "../marcas/marcas";
import { MarcasService } from "../marcas/marcas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-marcas",
  templateUrl: "./marcas.page.html",
  styleUrls: ["./marcas.page.scss"]
})
export class MarcasPage implements OnInit {
  public titulo: string = "Inicio";
  marcas: Marcas[];

  constructor(
    private marcasService: MarcasService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
  }

  ionViewWillEnter() {
    //this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
    console.log("entre al willenter: ");
  }

  ionViewDidEnter() {
    //this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
    this.listadoMarcas()
    console.log("ionViewDidEnter");
  }


  private listadoMarcas() {
    this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
  }
}
