export class Materiel{
    public constructor(public id :number,
                        public serialID : String,
                        public lesite : number,
                         public client: number,
                         public article: number)
                       
                         {}
    

    public copyFrom(other: Materiel){
        this.id=other.id;
        this.serialID=other.serialID;
        this.lesite=other.lesite;
        this.client=other.client;
        this.article=other.article;
       
    }
    public toJson(){
        return {
            id:this.id,
            serialID:this.serialID,
            lesite:this.lesite,
            client:this.client,
            article:this.article
        }
    }
}

