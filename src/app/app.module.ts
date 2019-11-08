import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShopComponent } from "./shop/shop.component";
import { ListComponent } from './list/list.component';
import { CheckOutComponent } from './checkOut/checkOut.component';
import { OrderSummaryComponent } from './orderSummary/orderSummary.component';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ThemeModule } from "./theme/theme.module";
import {ReactiveFormsModule} from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PagerModule } from "nativescript-pager/angular";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUIListViewModule,
      ThemeModule,
      ReactiveFormsModule,
      NativeScriptFormsModule,
      PagerModule,

   ],
   declarations: [
      AppComponent,
      ShopComponent,
      ListComponent,
      CheckOutComponent,
      OrderSummaryComponent
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
