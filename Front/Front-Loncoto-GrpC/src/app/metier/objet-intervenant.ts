
export class Intervenant{
    public constructor(public id :number,
                        public nom: string,
                        public prenom: string,
                        public email: string
                         )
                         
                       
                         {}
    

    public copyFrom(other: Intervenant){
        this.id=other.id;
        this.nom=other.nom;
        this.prenom=other.prenom;
        this.email=other.email;
        

    }

public toJson(){
    return {
        id:this.id,
        nom:this.nom,
        prenom: this.prenom,
        email: this.email
    };
}

}

