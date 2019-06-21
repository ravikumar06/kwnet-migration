import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from"rxjs"

@Injectable()

export class DataService {
    constructor(private http:HttpClient) {

    }

    public getData():Observable<any> {
        let params = {
            tableParams:{
                count: 50,
                filter: {},
                page: 1,
                sorting: {}
            }
        }
        return this.http.post("http://articleprocess.test/api/articles", params)
    }
}