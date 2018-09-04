import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MaterielRepositoryService } from '../../../../../../services/materiel-repository.service';
import { Subject, Subscription } from 'rxjs';
import { Materiel } from '../../../../../../metier/objet-materiel';


@Component({
  selector: 'app-display-materiels-operateur',
  templateUrl: './display-materiels-operateur.component.html',
  styleUrls: ['./display-materiels-operateur.component.css']
})
export class DisplayMaterielsOperateurComponent implements OnInit {
  public materielsSubject : Subject<Materiel[]>
  private clientsSouscription : Subscription;
  public totalItems:number;
  public currentPage : number;
  public taillePage : number;
 

  @Output() public showdetails: EventEmitter<number>=new EventEmitter<number>();;




  constructor(private clientRepository: MaterielRepositoryService) {
    //pour le ngfor
    this.materielsSubject= new Subject<Materiel[]>();
   }

  

public pageChanged(event){
  this.clientRepository.setnopage(event.page-1);
}
  ngOnInit() {
    this.clientsSouscription=this.clientRepository.getMaterielsAsObservable().subscribe(p=>{
      // je reçois les nouvelles pages d'clients
      this.materielsSubject.next(p.content);
      this.totalItems=p.totalElements;
      this.currentPage=p.number+1;
      this.taillePage=p.size;
    });
    this.clientRepository.refreshListe();
  }

  public details(id: number) {
    this.showdetails.emit(id);
    

  }
}