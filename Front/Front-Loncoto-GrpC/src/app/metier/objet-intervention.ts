
export class Intervention{
    public constructor(public id :number,
                        public datePrevu: string,
                        public dateEffectue: string,
                        public statut: string,
                        public commentaire: string,
                        public materiel: number,
                        public intervenant: number
                    )
                         
                       
                         {}
    

    public copyFrom(other: Intervention){
        this.id=other.id;
        this.datePrevu=other.datePrevu;
        this.dateEffectue=other.dateEffectue;
        this.statut=other.statut;
        this.commentaire=other.commentaire;
        this.materiel=other.materiel;
        this.intervenant=other.intervenant;
    }
    public toJson(){
        return {
            id:this.id,
            datePrevu:this.datePrevu,
            dateEffectue: this.dateEffectue,
            statut: this.statut,
            commentaire:this.commentaire,
            materiel: this.materiel,
            intervenant: this.intervenant,
        };
    }
    public toEvent(){
        return {
            start:this.datePrevu,
            end: this.dateEffectue,
            title: this.materiel
            
        };
    }
}