import { Component, OnInit, Input } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-textArea',
  templateUrl: './textArea.component.html',
  styleUrls: ['./textArea.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() hint = '';
  pageSide: number;
  iconSize: number;
  page: any;
  boxSize: number;

  constructor() { }

  ngOnInit() {
   
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    // this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.90;
  
  }

}
