import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";

@Injectable()
export class ProductComponent{
    constructor(private http: HttpClient)
    {

    }

    getDetails(): Observable<frameDetails[]>{
        return this.http.get<frameDetails[]>("C:/Users/X6NALLUR/my_first_angular/src/assets/data/test.json");
    }
}