import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {frameDetails} from "./framedetails";
import { FrameComponent } from "./frame.service";
import {image} from "./image"
import {frame_thumb_t} from "./image_thumbnails"
//import { Console } from "console";'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
//import { Console } from "console";


@Component({
    selector: "testHtmlag",
    templateUrl: 'testFrame.html',
    providers: [FrameComponent]
})


export class FrameListComponent// implements OnInit
{
    pageTitle: string = 'Product List';
    frameName: string | undefined;

    //Frame_names: string[] = ['Black', 'BLA', 'ZSS-30002']; 

    image_path: string | undefined;

    All_products: frameDetails[] = [];

    products: frameDetails[] = []; 

    public products_h: frameDetails[] = [];

    annn: any;

    temp = image;
    test_image_for = frame_thumb_t;

    //private domSanitizer_1: DomSanitizer | undefined;
    test_image_1: string | undefined;

    t1 : string | undefined;


    constructor(private proser : FrameComponent, private domSanitizer_1: DomSanitizer)
    {
        
    }

    ngOnInit(): void 
    {
      this.proser.getDetailsAll().subscribe(data => {
        for(var ele of data){
          //var t1 = this.domSanitizer_1.bypassSecurityTrustResourceUrl(ele.base64Emb) as string;
          //console.log(data)
          //this.t1 = this.transform(ele["base64Emb"])
          //this.t1 = this.transform(ele.base64emb)
          //console.log(ele["base64emb"])
          //ele.base64emb = this.t1;
          //this.products_h.push(ele);

          const frame_ins: frameDetails = {
            uniqueName: ele["uniqueName"],
            brandName: ele["brandName"],
            frameModel: ele["frameModel"],
            frameColor: ele["frameColor"],
            varientGroup: ele["varientGroup"],
            materialType: ele["materialType"],
            rrp: ele["rrp"],
            rrpCurrency: ele["rrpCurrency"],
            frameColourDescription: ele["frameColourDescription"],
            frameSize: ele["frameSize"],
            base64emb: this.transform(ele["base64emb"])
            //base64Emb: this.domSanitizer_1.bypassSecurityTrustResourceUrl(ele.base64Emb as string) as string
          }

          this.All_products.push(frame_ins);
          console.log(frame_ins.base64emb);

        }
        //console.log(this.products_h);
      });
    }

    onClickSubmit(data: { frame_name: string;}) 
    {
      this.frameName = data.frame_name;
      //this.proser.getDetails().subscribe(data => this.products_h = data);
      //this.image_path= "C:\\Users\\X6NALLUR\\Downloads\\Frames\\" + this.frameName;
      //this.proser.getDetails(this.frameName).subscribe(data =>this.SanitizeData(data));
    }

    transform(url: string): string {
      var safeResource = this.domSanitizer_1.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${url}`) as string;
      return safeResource;
    }

    SanitizeData(data: frameDetails[]): frameDetails[]
    {
      for(var ele of data)
      {        
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
          base64emb: ele.base64emb
          //base64Emb: this.domSanitizer_1.bypassSecurityTrustResourceUrl(ele.base64Emb as string) as string
        }
        this.All_products.push(frame_ins);
        console.log(frame_ins.base64emb);
      }

      return this.All_products
    }
}


