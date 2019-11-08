import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'ns-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
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
   public checkOut(){
    this.routerExtension.navigate(["checkOut"]);

  }

}
