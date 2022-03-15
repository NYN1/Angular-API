import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ProductComponent{

    baseUrl: string = "https://localhost:7143/Frame_conroller/"
    name_frame: string = "ZSS-30002"
    //frameName: string;
    constructor(private http: HttpClient)
    {

    }

    public _sanitizer!: DomSanitizer;

    getDetails(frame_d: string): Observable<frameDetails[]>{
        return this.http.get<frameDetails[]>(this.baseUrl + frame_d);
    }

    getDetailsAll(): Observable<frameDetails[]>{
        return this.http.get<frameDetails[]>(this.baseUrl);
    }
}