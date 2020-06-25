import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {

    vaisseaux = [
        new Vaisseau(1, "Accuser", "L'Accuser était un destroyer Stellaire Impérial ayant participé à la Bataille d'Endor.", "../../assets/images/vaisseaux/accuser.jpg", "Imperial I-class Star Destroyer", "Kuat Drive Yards", 1000),
        new Vaisseau(2, "Aelena", "L’Aelena était l’une des Frégates d’Assaut Mk II appartenant à l’Alliance Rebelle. J'ai passé plus de temps à faire ces recherches / le design qu'à vraiment faire le TP T_T", "../../assets/images/vaisseaux/aelena.jpg", "Assault Frigate Mark II", "Rendili StarDrive", 400),
        new Vaisseau(3, "Ark Angel", "L'Ark Angel était le vaisseau de l'archéologue Aphra, qui fut détruit lors de la bataille de Vrogas Vas puis réparé par Krrsantan pour devenir...", "../../assets/images/vaisseaux/ark_angel.jpg", "Bellicose-class HK heavy-duty lifter", "Hoersch-Kessel Drive, Inc.", 400)
    ];

  constructor(private http: HttpClient) { }

  getAllVaisseau(): Vaisseau[]
  {
      return this.vaisseaux;
  }

  getAllVaisseauHttp(): Observable<Vaisseau[]>
  {
      return this.http.get<Vaisseau[]>("http://localhost:3000/vaisseau")
      .pipe(
          retry(1),
          catchError(this.handleError)
      );
  }

  getVaisseau(id: number): Vaisseau
  {
      return this.vaisseaux.filter(planet => planet.id === id)[0];
  }

  getVaisseauHttp(id: number): Observable<Vaisseau>
  {
      return this.http.get<Vaisseau>("http://localhost:3000/vaisseau/" + id)
      .pipe(
          retry(1),
          catchError(this.handleError)
      );
  }

  addVaisseauService(_vaisseau: Vaisseau): void
  {
      this.vaisseaux.push(_vaisseau);
  }

  addVaisseauServiceHttp(_vaisseau: Vaisseau)
  {
      return this.http.post<Vaisseau>("http://localhost:3000/vaisseau", _vaisseau)
      .pipe(
          retry(1),
          catchError(this.handleError)
      );
  }

  deleteVaisseauService(_vaisseau: Vaisseau)
  {
      this.vaisseaux = this.vaisseaux.filter(vaisseauToDelete => _vaisseau !== vaisseauToDelete);
  }

  deleteVaisseauServiceHttp(_vaisseau: Vaisseau)
  {
      return this.http.delete("http://localhost:3000/vaisseau/" + _vaisseau.id)
      .subscribe(
          error => {
              console.log(error);
          })
  }

  edit(_vaisseau: Vaisseau) : void
  {
      this.vaisseaux.filter(vaisseauToUpdate => _vaisseau === vaisseauToUpdate)[0] = _vaisseau;
  }

  editHttp(_vaisseau: Vaisseau)
  {
      return this.http.put("http://localhost:3000/vaisseau/" + _vaisseau.id, _vaisseau)
      .pipe(
          retry(1),
          catchError(this.handleError)
      );
  }

    // Les erreurs HTTP
    handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
       errorMessage = error.error.message;
    } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}
