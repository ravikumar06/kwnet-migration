import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"

@Injectable()

export class UserService {
    constructor(private http: HttpClient) {

    }

    public getData(): Observable<any> {
        return this.http.get("http://userinteraction.test/api/ticket-category?tableParams=%7B%22filter%22:%7B%7D,%22sorting%22:%7B%22title%22:%22ASC%22%7D,%22count%22:1000,%22page%22:1%7D")
    }
}