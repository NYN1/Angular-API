import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";
import { ProductComponent } from "./product.service";
import {image} from "./image"
import {frame_thumb_t} from "./image_thumbnail"
//import { Console } from "console";'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: "pm-products",
    templateUrl: './testAmazon.html',
    providers: [ProductComponent]
})


export class ProductListComponent //implements OnInit
{
    pageTitle: string = 'Product List';
    frameName: string | undefined;

    Frame_names: string[] = ['Black', 'BLA', 'ZSS-30002']; 

    image_path: string | undefined;

    All_products: frameDetails[] = [];

    products: frameDetails[] = []; 

    public products_h: frameDetails[] = [];

    temp = image;
    test_image_for = frame_thumb_t;


    constructor(private proser : ProductComponent, private domSanitizer: DomSanitizer)
    {
        
    }

    ngOnInit(): void 
    {
      for(var fname in this.Frame_names)
      { 
        var t1 = this.Frame_names[fname]
        this.image_path= "C:\\Users\\X6NALLUR\\Downloads\\Frames\\" + t1;
        this.proser.getDetailsAll().subscribe(data => this.SanitizeData(data));
      }
    }

    onClickSubmit(data: { frame_name: string;}) 
    {
      this.frameName = data.frame_name;
      //this.proser.getDetails().subscribe(data => this.products_h = data);
      //this.image_path= "C:\\Users\\X6NALLUR\\Downloads\\Frames\\" + this.frameName;
      this.proser.getDetails(this.frameName).subscribe(data =>{ this.products_h = data});
    }

    SanitizeData(data: frameDetails[]): void
    {
      for(var ele of data)
      {
        try{var image_source = this.domSanitizer.bypassSecurityTrustResourceUrl(ele.base64Emb);}
        catch(ex){console.log(ex);}
        
        
        const frame_ins: frameDetails = {
          uniqueName: ele.uniqueName,
          brandName: ele.brandName,
          frameModel: ele.frameModel,
          frameColor: ele.frameColor,
          varientGroup: ele.varientGroup,
          materialType: ele.materialType,
          rrp: ele.rrp,
          rrpCurrency: ele.rrpCurrency,
          frameColourDescription: ele.frameColourDescription,
          frameSize: ele.frameSize,
          base64Emb: this.domSanitizer.bypassSecurityTrustHtml(`data:image/png;base64, ${ele.base64Emb}`) as string,
        }
        this.All_products.push(frame_ins)
      }

      console.log(this.All_products)
    }
}


