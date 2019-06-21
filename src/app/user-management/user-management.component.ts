import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public users:any;
  constructor(private userService:UserService) { 
    this.users = [
      { "UserId": 2, "FirstName": "Admin", "LastName": "Admin", "WindowsName": "admin", "Gender": "male", "IsExtern": true, "IsSuperUser": true, "Updated": "2016-04-04T10:02:23", "RegisteredDate": "2016-03-18T14:25:32", "Email": "admin@kw-commerce.de", "DepartmentIds": [] }, 
      { "UserId": 417, "FirstName": "Ahmed", "LastName": "Zaghrat", "WindowsName": "ahmed.zaghrat", "Gender": "male", "IsExtern": false, "IsSuperUser": true, "Updated": "2017-06-23T11:25:07", "RegisteredDate": "2016-03-18T14:25:32", "Email": "ahmed.zaghrat@kw-commerce.de", "DepartmentIds": [7, 8] }, 
      { "UserId": 517, "FirstName": "Akao", "LastName": "Lin", "WindowsName": "akao.lin", "Gender": "male", "IsExtern": false, "IsSuperUser": false, "Updated": "2016-05-10T09:52:45", "RegisteredDate": "2016-05-10T09:52:45", "Email": "akao.lin@kw-commerce.de", "DepartmentIds": [] }, 
      { "UserId": 325, "FirstName": "Alexander", "LastName": "Varchmin", "WindowsName": "alexander.varchmin", "Gender": "", "IsExtern": false, "IsSuperUser": false, "Updated": "2016-03-18T14:25:32", "RegisteredDate": "2016-03-18T14:25:32", "Email": "alexander.varchmin@kw-commerce.de", "DepartmentIds": [] }, 
      { "UserId": 396, "FirstName": "Alexander ", "LastName": "Pickert", "WindowsName": "alexander.pickert", "Gender": "", "IsExtern": false, "IsSuperUser": false, "Updated": "2016-03-18T14:25:32", "RegisteredDate": "2016-03-18T14:25:32", "Email": "alexander.pickert@kw-commerce.de", "DepartmentIds": [] }
    ]
  }

  ngOnInit() {
  }

}
