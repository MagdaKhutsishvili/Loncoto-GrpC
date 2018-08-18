import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  

  ngOnInit() {
  }


 
     @ViewChild('container')
     private container: ElementRef;
 
     constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
     }
 
     public goToHead2(): void {
         let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
         this.pageScrollService.start(pageScrollInstance);
     };    
     
     public scrollSomewhereHorizontally(): void {
         let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '#targetToTheRight', verticalScrolling: false});
         this.pageScrollService.start(pageScrollInstance);
     }; 
 
     public goToHeadingInContainer(): void {
         let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.headingClass', scrollingViews: [this.container.nativeElement]});
         this.pageScrollService.start(pageScrollInstance);
     };
 }