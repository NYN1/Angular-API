import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {user_details} from "./userDetails";

@Injectable()
export class UserComponent{

    baseURL: string = "http://localhost:8000/Nayan";

    constructor(private http: HttpClient)
    {

    }

    getDetails(): Observable<user_details[]>{
        return this.http.get<user_details[]>(this.baseURL);
    }

    addPerson(person:user_details): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(person);
        console.log(body)
        return this.http.post(this.baseURL , body,{'headers':headers})
      }
}