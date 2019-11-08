import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ns-checkOut',
  templateUrl: './checkOut.component.html',
  styleUrls: ['./checkOut.component.css']
})

export class CheckOutComponent implements OnInit {
  pageSide: number;
  iconSize: number;
  boxSize: number;
  rform: FormGroup
  currentPagerIndex = 0;
  latestReceivedIndex = 0
    

  formData = [
    {  
      formTitle: 'Shipping information',
      formFields: [
        {
          inputType: 'textField',
          hint: 'first name',
          keyboardType: 'string',
          position: 'full'
        },
        [
          {
            inputType: 'textField',
            hint: 'last name',
            keyboardType: 'string',
            position: 'half'
          },
          {
            inputType: 'textField',
            hint: 'company name',
            keyboardType: 'string',
            position: 'half'
          }
        ],
      ]
    },
    {
      formTitle: 'Address',
      formFields: [
        {
          inputType: 'textArea',
          hint: 'Address',
          keyboardType: 'string'
        },
        [
          {
            inputType: 'textField',
            hint: 'zip code',
            keyboardType: 'string'
          },
          {
            inputType: 'textField',
            hint: 'state',
            keyboardType: 'string'
          }
        ],
        [
          {
            inputType: 'textField',
            hint: 'city',
            keyboardType: 'string'
          },
          {
            inputType: 'textField',
            hint: 'country',
            keyboardType: 'string'
          }
        ],
      ]
    },
    {
      formTitle: 'Contact',
      formFields: [
        {
          inputType: 'textField',
          hint: 'Email',
          keyboardType: 'string'
        },
        {
          inputType: 'textField',
          hint: 'Telephone number',
          keyboardType: 'string'
        },
      ]
    },
  ]
  pagerbox: number;
  constructor(
    private routerExtension: RouterExtensions,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    // this.pagerbox = deviceWidth * 1.0;
  
    this.boxSize = deviceWidth * 0.90;
   
    this.rform = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
    });

      }
      public Summary(){
        this.routerExtension.navigate(["orderSummary"]);

      }
      onBoardingitems = [
        {
          title: 'Personal Information',
          key: 'Personalinfo'
        },
        {
          title: 'Acadmics Information',
          key: 'Acadmics'
        },
        {
        title: 'Acadmic Information',
        key: 'Acadmic'
      },
      ];
     onIndexChanged($event) {
        this.latestReceivedIndex = $event.value;
        this.currentPagerIndex = $event.value;
      }
    
      public templateSelector = (item: any) => {
        switch (item.key) {
          case 'Personalinfo': {
            return 'Personalinfo'
          }
            break;
          case 'Acadmics': {
            return 'Acadmics'
          }
            break;
    
            case 'Acadmic': {
              return 'Acadmic'
            }
              break;
      
        }
      }
}


