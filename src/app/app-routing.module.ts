import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ShopComponent } from "./shop/shop.component";
import { ListComponent } from "./list/list.component";
import { CheckOutComponent } from "./checkOut/checkOut.component";
import { TextFieldComponent } from "./theme/components/textField/textField.component";


const routes: Routes = [    
    { path: "", redirectTo: "shop", pathMatch: "full" },
    {path:"shop",component:ShopComponent},
    {path:"list",component:ListComponent},
    {path:"checkOut",component:CheckOutComponent},
   {path:"textField",component:TextFieldComponent}
];
  
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
