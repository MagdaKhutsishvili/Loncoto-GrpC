import { Component, OnInit, Input} from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';
@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
  }


 

 }