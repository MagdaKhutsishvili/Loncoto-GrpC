import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { Site } from '../../../../../../metier/objet-site';

import { SiteRepositoryService } from '../../../../../../services/site-repository.service';


@Component({
  selector: 'app-edit-sites-operateur',
  templateUrl: './edit-sites-operateur.component.html',
  styleUrls: ['./edit-sites-operateur.component.css']
})
export class EditSitesOperateurComponent implements OnInit {

  @Input() public editIdSite: number;
  public currentSite : Site;

  constructor(private SiteRepository : SiteRepositoryService) {


   }



   public saveSite() {
    
      if (this.currentSite.id > 0){
        let InterToSave = new Site(0,"","",0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentSite);

        console.log(InterToSave);
        this.SiteRepository.updateSite(InterToSave);
        this.currentSite = new Site(0,"","",0);
      }
      else{
        let InterToSave = new Site(0,"","",0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentSite);

        console.log(InterToSave);
        this.SiteRepository.createSite(InterToSave);
        this.currentSite = new Site(0,"","",0);
      }
 
    }


  public cancelSite() {
    this.currentSite = new Site(0,"","",0);
  }

public removeSite(){

  this.SiteRepository.removeSite(this.currentSite.id);
  this.currentSite=new Site(0,"","",0);
}



  ngOnInit() {
    this.currentSite=new Site(0,"","",0);
  }

  ngOnChanges(changes:any){
    
    if (this.editIdSite==0){
      this.currentSite=new Site(0,"","",0);
    }
    else{
      
      this.SiteRepository.findById(this.editIdSite).subscribe(Site=> { this.currentSite=Site;
      });
    }
  }



}
