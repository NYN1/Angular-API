import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";
import { ProductComponent } from "./product.service";


@Component({
    selector: "pm-products",
    templateUrl: './product-list-component.html',
    providers: [ProductComponent]
})


export class ProductListComponent implements OnInit{

    pageTitle: string = 'Product List';
    frameName: string = "ZS-1002";

    products: frameDetails[] = []; 

    public products_h: frameDetails[] = [];

    constructor(private proser : ProductComponent){
        
    }

    ngOnInit(): void {
      this.proser.getDetails().subscribe(data => this.products_h = data)
    }
}