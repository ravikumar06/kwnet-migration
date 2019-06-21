import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy} from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TagInputModule } from "ngx-chips";

import { appRouter } from "./routing/routing";
import { HttpConfigInterceptor } from "./interceptor/httpconfig.interceptor";
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DataComponent } from './data/data.component';
import { UserManagementComponent } from './user-management/user-management.component';


import { DataService } from "./data/data.service";
import { UserService } from "./user-management/user.service";

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    DataComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter),
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    TagInputModule
  ],
  providers: [
    UserService,
    DataService,
    { provide:HTTP_INTERCEPTORS, useClass:HttpConfigInterceptor, multi:true },
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
