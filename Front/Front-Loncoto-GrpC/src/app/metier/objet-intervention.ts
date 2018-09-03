
export class Intervention{
    public constructor(public id :number,
                        public datePrevu: string,
                        public dateEffectue: string,
                        public statut: string,
                        public commentaire: string,
                        public id_Materiel: number,
                        public id_Intervenant: number
                    )
                         
                       
                         {}
    

    public copyFrom(other: Intervention){
        this.id=other.id;
        this.datePrevu=other.datePrevu;
        this.dateEffectue=other.dateEffectue;
        this.statut=other.statut;
        this.commentaire=other.commentaire;
        this.id_Materiel=other.id_Materiel;
        this.id_Intervenant=other.id_Intervenant;
    }
    public toJson(){
        return {
            id:this.id,
            datePrevu:this.datePrevu,
            dateEffectue: this.dateEffectue,
            statut: this.statut,
            commentaire:this.commentaire,
            id_Materiel: this.id_Materiel,
            id_Intervenant: this.id_Intervenant,
        };
    }
}