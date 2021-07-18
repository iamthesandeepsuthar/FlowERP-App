import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSetting } from '../model/Common/app-setting';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public IsAuthentication: boolean = true;
  constructor(
    private readonly _baseService: BaseService,
    private readonly _router: Router,
  ) {
    
  }

  IsAccessibleUrl(requestedUrl: string): boolean {
    return true;
  }

  Login() {
   
         
  }
  LogOut() {
    
    this.removelocalStorage();
    localStorage.removeItem('SessionTime');
  

    window.location.href = location.origin + AppSetting.LogOutUrl;
  }


  removelocalStorage() {
    this.IsAuthentication = false;
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');
    localStorage.removeItem('UserType');
    localStorage.removeItem('UserName');
    localStorage.removeItem('UserDetails');
    localStorage.removeItem('IsAuthentication');

  }


}
