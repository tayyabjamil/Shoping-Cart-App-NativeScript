import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageSide: number;
  iconSize: number;
  boxSize: number;

  constructor(private page:Page,private routerExtension:RouterExtensions) { }
  
  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    // this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.90;
    
  }
shop(){
  this.routerExtension.navigate(["shop"]);
}
}
