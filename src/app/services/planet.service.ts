import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

    planets = [
        new Planet(1, "Bespin", "La planète abrite la Cité des Nuages, qui flotte dans les airs grâce à un système anti-gravité.", "../../assets/images/planets/bespin.jpg", "6 000 000" , "Empire galactique"),
        new Planet(2, "Coruscant", "Capitale de la République galactique puis de l'Empire galactique.", "../../assets/images/planets/coruscant.jpg", "998 374 milliards" , "Ordre Jedi, République galactique, Empire galactique"),
        new Planet(3, "Naboo", "Naboo est la planète natale de Padmé Amidala et de Jar Jar Binks, ainsi que du sénateur", "../../assets/images/planets/naboo.jpg", "625 000 000" , "Société Gungan, Maison Royale de Naboo, République galactique"),
        new Planet(4, "Double nom", "Planete test pour tester les initiales", "../../assets/images/planets/test.jpg", "0" , "Human Booster")
    ];
    errorReturn: boolean = false;


    constructor(private http: HttpClient) { }

    getAllPlanets(): Planet[]
    {
        // console.log(this.planets);
        return this.planets;
    }

    getAllPlanetHttp(): Observable<Planet[]>
    {
        return this.http.get<Planet[]>("http://localhost:3000/planet")
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    getPlanet(id: number): Planet
    {
        // Retourne une planet en fonction de son ID. On peut aussi utiliser "find" à la place de "filter"
        return this.planets.filter(planet => planet.id === id)[0];
    }

    getPlanetHttp(id: number): Observable<Planet>
    {
        // Retourne une planet en fonction de son ID. On peut aussi utiliser "find" à la place de "filter"
        return this.http.get<Planet>("http://localhost:3000/planet/" + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    addPlanetService(_planet: Planet) : void
    {
        this.planets.push(_planet);
    }

    addPlanetServiceHttp(_planet: Planet)
    {
        return this.http.post<Planet[]>("http://localhost:3000/planet", _planet)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    deletePlanetService(_planet: Planet)
    {
        // console.log(_planet);
        this.planets = this.planets.filter(planetToDelete => _planet !== planetToDelete);
    }

    deletePlanetServiceHttp(_planet: Planet)
    {
        this.http.delete("http://localhost:3000/planet/" + _planet.id)
        .subscribe(
            error => {
                console.log(error);
            })
    }

    edit(_planet: Planet) : void
    {
        this.planets.filter(planetToUpdate => _planet === planetToUpdate)[0] = _planet;
    }

    editHttp(_planet: Planet)
    {
        return this.http.put("http://localhost:3000/planet/" + _planet.id, _planet)
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
     return throwError(errorMessage);
    }


}
