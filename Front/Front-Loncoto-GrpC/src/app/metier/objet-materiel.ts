export class Materiel{
    public constructor(public id :number,
                        public numero_de_serie: number,
                        public id_Site : number,
                         public id_Client: number,
                         public id_article: number)
                       
                         {}
    

    public copyFrom(other: Materiel){
        this.id=other.id;
        this.numero_de_serie=other.numero_de_serie;
        this.id_Site=other.id_Site;
        this.id_Client=other.id_Client;
        this.id_article=other.id_article;
       
    }
    public toJson(){
        return {
            id:this.id,
            numero_de_serie:this.numero_de_serie,
            id_Site:this.id_Site,
            id_Client:this.id_Client,
            id_article:this.id_article
        }
    }
}

