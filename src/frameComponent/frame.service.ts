import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class FrameComponent{

    baseUrl: string = "https://localhost:7143/Frame_conroller/"
    name_frame: string = "ZSS-30002"
    testUrl: string = "https://localhost:7143/Frame_conroller/testImage/"
    //frameName: string;
    constructor(private http: HttpClient)
    {

    }

    getDetails(frame_d: string): Observable<frameDetails[]>{
        return this.http.get<frameDetails[]>(this.baseUrl + frame_d);
    }


    getTestImage(frame_d: string): Observable<string>{
        return this.http.get<string>(this.testUrl + frame_d);
    }

    

    getDetailsAll(): Observable<frameDetails[]>{
        return this.http.get<frameDetails[]>(this.baseUrl);
    }
}