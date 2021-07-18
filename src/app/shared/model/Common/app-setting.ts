import { environment } from 'src/environments/environment';

export class AppSetting {
  static ThumbnailSize(ThumbnailSize: any): any {
    throw new Error('Method not implemented.');
  }

  static BaseApiUrl = environment.ApiUrl; 

  static orderByDscAsc = 'asc';
  static orderByAsc = 1;
  static orderByDsc = 0;

  //#region <user-authentication>
  static DefaultProfilePic = 'assets/images/profile.png';
  static LogInUrl = environment.ApiUrl + 'Account/LogIn?Id=';
  static LogOutUrl = environment.ApiUrl + 'Account/LogIn';
  //#endregion


}
