import { Injectable } from '@angular/core';
import { AppSetting } from '../model/Common/app-setting';
import { AuthenticationService } from './auth.service';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: number[] = [];
  constructor(private readonly _baseService: BaseService, private readonly _auth: AuthenticationService) { }


  

  ScrollingTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  


}

