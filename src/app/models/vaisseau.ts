export class Vaisseau {
    id: number;
    nom: string;
    description: string;
    image: string;
    model: string;
    creator: string;
    nbrPassager: number;

    constructor(id: number = null, nom: string = null, description:string = null, image:string = "../../assets/images/vaisseaux/vaisseauTest.jpg", model: string = null, creator: string = null, nbrPassager: number = null)
    {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.image = image;
        this.model = model;
        this.creator = creator;
        this.nbrPassager = nbrPassager;
    }
}
