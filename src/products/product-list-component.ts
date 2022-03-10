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


export class ProductListComponent// implements OnInit{
{
    pageTitle: string = 'Product List';
    frameName: string | undefined;

    image_path: string | undefined;

    products: frameDetails[] = []; 

    public products_h: frameDetails[] = [];

    constructor(private proser : ProductComponent){
        
    }

    //ngOnInit(): void {
    //  this.proser.getDetails().subscribe(data => this.products_h = data)
    //}

    onClickSubmit(data: { frame_name: string;}) 
    {
      this.frameName = data.frame_name;
      //this.proser.getDetails().subscribe(data => this.products_h = data);
      this.image_path= "C:\\Users\\X6NALLUR\\Downloads\\Frames\\" + this.frameName;
      this.proser.getDetails(this.frameName).subscribe(data => this.products_h = data);
    }
}