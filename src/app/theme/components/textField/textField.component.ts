import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-textField',
  templateUrl: './textField.component.html',
  styleUrls: ['./textField.component.css'],
  moduleId:module.id
})
export class TextFieldComponent implements OnInit {
  
  @Input() rformgroup: FormGroup;
  @Input() rformcontrolname;
  @Input() hint = "Title";
  @Input() row=0;
  @Input() col=0;
  @Input() class;
  
  pageSide;
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

  // get invalidControl() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].invalid)
  //     return true;
  //   else{
  //  return false;
  //   }
  // }

  // get errorRequired() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.required) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // get errorFormate() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.email) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // get errorLength() {
  //   if (this.rformgroup.dirty &&
  //     this.rformgroup.controls[this.rformcontrolname].touched &&
  //     this.rformgroup.controls[this.rformcontrolname].errors &&
  //     this.rformgroup.controls[this.rformcontrolname].errors.minlength) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
