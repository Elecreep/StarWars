export class Planet {
    id: number;
    nom: string;
    description: string;
    image: string;
    nbrHabitant: string;
    faction: string;

    constructor(id: number = null, nom: string = null, description: string = null, image: string = null, nbrHabitant: string = null, faction: string = null)
    {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.image = image;
        this.nbrHabitant = nbrHabitant;
        this.faction = faction;
    }
}
