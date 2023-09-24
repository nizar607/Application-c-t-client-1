import { Component } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent {
  list: Fournisseur[] = [
    { idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
    { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
    { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
    { idFournisseur: 400, code: "40ABC452", libelle: "asus" }
  ];

  getColor(code: string) {
    return code.startsWith('2A') ? 'bolder' : '';
  }

  delete(fournisseur: Fournisseur) {
    let index = this.list.indexOf(fournisseur);
    this.list.splice(index, 1);
  }

}
