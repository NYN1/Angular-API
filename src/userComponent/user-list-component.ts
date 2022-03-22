import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {user_details} from "./userDetails";
import {UserComponent} from "./user.service"
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { zeissImage } from "./zeissImage";
import {faceStd} from "./faceStd";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
    selector: "user_det",
    templateUrl: "./FrontZeiss.html",
    providers: [UserComponent]
})


export class UserListComponent implements OnInit{

    pageTitle: string = 'Product List';
    componentproperty: string = '';

    zeiss_img = zeissImage;
    face_std = faceStd;
    
    name: any;
    email: any;
    password: any;
    frame_size: any;
    age: any;
    faverateFrames: any;
    orderHistory: any;
    
    formdata: any;

    user_test?: userclass

    user_information: user_details[] = []; 

    public products_h: user_details[] = [];

    constructor(private proser : UserComponent){
        
    }

    ngOnInit(): void {
        console.log("Hello");
        
            this.proser.getDetails().subscribe(data => this.products_h = data)
            
            this.formdata = new FormGroup({
                name: new FormControl("name"),
                email: new FormControl("name@gmail.com"),
                password: new FormControl("abcd1234"),
                frame_size: new FormControl("12"),
                age: new FormControl("21"),
                faverateFrames: new FormControl(["None"]),
                orderHistory: new FormControl(["None"])
            })
    }
    onClickSubmit(data: { name: string; email: string; password: string; frame_size: string; faverateFrames: string[]; orderHistory: string[]; }) 
    {
        this.user_test = new userclass(data.name, data.email, data.password, data.frame_size, data.email , data.faverateFrames,data.orderHistory);
        this.proser.addPerson(this.user_test).subscribe(data => {
            console.log(data);
          })
    }

    drop(event: CdkDragDrop<string[]>, user_det: user_details) {
      console.log("Previous Index:", event.previousIndex );

      console.log("Current Index", event.currentIndex);

      console.log(user_det.faverateFrames);
      
      moveItemInArray(user_det.faverateFrames, event.previousIndex, event.currentIndex)

      console.log(user_det.faverateFrames);

      console.log("-----------Break----------");
      this.proser.rearrangeFavframe(user_det.name, user_det.faverateFrames).subscribe(data => {
        console.log(data);
      });
      }
}

interface userclass extends user_details {}

class userclass {
    // destruct data
    name: string;
    email: string;
    password: string;
    frame_size: string;
    age: string;
    faverateFrames: string[];
    orderHistory: string[];

    constructor(name: string, email: string, password: string, frame_size: string, age: string, faverateFrames: string[], orderHistory: string[])
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.frame_size = frame_size;
        this.age = age;
        this.faverateFrames = faverateFrames;
        this.orderHistory = orderHistory;
    }

    toObject(): user_details {
        return {...this};
    }
}

