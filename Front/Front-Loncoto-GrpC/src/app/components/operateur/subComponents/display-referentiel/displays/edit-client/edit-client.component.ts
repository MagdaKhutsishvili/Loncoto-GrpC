import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { Client } from '../../../../../../metier/objet-client';

import { ClientRepositoryService } from '../../../../../../services/client-repository.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit, OnChanges {

  @Input() public editIdClient: number;
  public currentClient : Client;

  constructor(private ClientRepository : ClientRepositoryService) {


   }



   public saveClient() {
    
      if (this.currentClient.id > 0){
        let InterToSave = new Client(0,"","",0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentClient);

        console.log(InterToSave);
        this.ClientRepository.updateClient(InterToSave);
        this.currentClient = new Client(0,"","",0);
      }
      else{
        let InterToSave = new Client(0,"","",0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentClient);

        console.log(InterToSave);
        this.ClientRepository.createClient(InterToSave);
        this.currentClient = new Client(0,"","",0);
      }
 
    }


  public cancelClient() {
    this.currentClient = new Client(0,"","",0);
  }

public removeclient(){

  this.ClientRepository.removeClient(this.currentClient.id);
  this.currentClient=new Client(0,"","",0);
}



  ngOnInit() {
    this.currentClient=new Client(0,"","",0);
  }

  ngOnChanges(changes:any){
    
    if (this.editIdClient==0){
      this.currentClient=new Client(0,"","",0);
    }
    else{
      this.ClientRepository.findById(this.editIdClient).subscribe(Client=> { this.currentClient=Client;
      });
    }
  }



}
