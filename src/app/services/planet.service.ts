import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

    planets = [
        new Planet(1, "Bespin", "La planète abrite la Cité des Nuages, qui flotte dans les airs grâce à un système anti-gravité.", "../../assets/images/planets/bespin.jpg", "6 000 000" , "Empire galactique"),
        new Planet(2, "Coruscant", "Capitale de la République galactique puis de l'Empire galactique.", "../../assets/images/planets/coruscant.jpg", "998 374 milliards" , "Ordre Jedi, République galactique, Empire galactique"),
        new Planet(3, "Naboo", "Naboo est la planète natale de Padmé Amidala et de Jar Jar Binks, ainsi que du sénateur", "../../assets/images/planets/naboo.jpg", "625 000 000" , "Société Gungan, Maison Royale de Naboo, République galactique")
    ];

    constructor() { }

    getAllPlanets(): Planet[]
    {
        // console.log(this.planets);
        return this.planets;
    }

    getPlanet(id: number): Planet
    {
        // Retourne une planet en fonction de son ID. On peut aussi utilisé "find" à la place de "filter"
        return this.planets.filter(planet => planet.id === id)[0];
    }

    addPlanetService(_planet: Planet) : void
    {
        this.planets.push(_planet);
    }


}
