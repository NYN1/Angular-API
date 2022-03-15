import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {image} from './image_const';

@Component({
  selector: 'app-root',
  template:'<pm-products></pm-products>'
})

export class AppComponent  {
  imageSource!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit () {
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
  }

}