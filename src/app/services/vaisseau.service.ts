import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {

    vaisseaux = [
        new Vaisseau(1, "Accuser", "L'Accuser était un destroyer Stellaire Impérial ayant participé à la Bataille d'Endor.", "../../assets/images/vaisseaux/accuser.jpg", "Imperial I-class Star Destroyer", "Kuat Drive Yards", 1000),
        new Vaisseau(2, "Aelena", "L’Aelena était l’une des Frégates d’Assaut Mk II appartenant à l’Alliance Rebelle. J'ai passé plus de temps à faire ces recherches / le design qu'à vraiment faire le TP T_T", "../../assets/images/vaisseaux/aelena.jpg", "Assault Frigate Mark II", "Rendili StarDrive", 400),
        new Vaisseau(3, "Ark Angel", "L'Ark Angel était le vaisseau de l'archéologue Aphra, qui fut détruit lors de la bataille de Vrogas Vas puis réparé par Krrsantan pour devenir...", "../../assets/images/vaisseaux/ark_angel.jpg", "Bellicose-class HK heavy-duty lifter", "Hoersch-Kessel Drive, Inc.", 400)
    ];

  constructor() { }

  getAllVaisseau(): Vaisseau[]
  {
      return this.vaisseaux;
  }

  getVaisseau(id: number): Vaisseau
  {
      return this.vaisseaux.filter(planet => planet.id === id)[0];
  }

  addVaisseauService(_vaisseau: Vaisseau): void
  {
      this.vaisseaux.push(_vaisseau);
  }

  deleteVaisseauService(_vaisseau: Vaisseau)
  {
      this.vaisseaux = this.vaisseaux.filter(vaisseauToDelete => _vaisseau !== vaisseauToDelete);
  }

  edit(_vaisseau: Vaisseau)
  {
      this.vaisseaux.filter(vaisseauToUpdate => _vaisseau === vaisseauToUpdate)[0] = _vaisseau;
  }
}
