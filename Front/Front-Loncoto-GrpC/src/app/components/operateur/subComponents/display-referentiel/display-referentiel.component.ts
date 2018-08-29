import { Component, OnInit } from '@angular/core';
import { ArticleRepositoryService } from '../../../../services/article-repositories.service';
import { Subject, Subscription } from 'rxjs';
import { Article } from '../../../../metier/objet-article';


@Component({
  selector: 'app-display-referentiel',
  templateUrl: './display-referentiel.component.html',
  styleUrls: ['./display-referentiel.component.css']
})
export class DisplayReferentielComponent implements OnInit {

  public articlesSubject : Subject<Article[]>
  private articlesSouscription : Subscription;
  public totalItems:number;
  public currentPage : number;
  public taillePage : number;
 

  
  constructor(private articleRepository: ArticleRepositoryService) {
    //pour le ngfor
    this.articlesSubject= new Subject<Article[]>();
   }

  

public pageChanged(event){
  this.articleRepository.setnopage(event.page-1);
}
  ngOnInit() {
    this.articlesSouscription=this.articleRepository.getArticlespageAsObservable().subscribe(p=>{
      // je reçois les nouvelles pages d'articles
      this.articlesSubject.next(p.content);
      this.totalItems=p.totalElements;
      this.currentPage=p.number+1;
      this.taillePage=p.size;
    });
    this.articleRepository.refreshListe();
  }

}



