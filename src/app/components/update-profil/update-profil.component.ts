import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {
  avatar = './assets/img/avatar.jpg';
  username: string;
  email : String ;
  id:any;
  password : String ;
  newPassword: any;
  oldPassword:any;
 
  public fileImage: File;
  public message: string;
  constructor(private userService: UserService,
     private tokenStorageService: TokenStorageService,private router: Router, private _snackbar: MatSnackBar ) { }

  ngOnInit() {
   
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.userService.getUserAvatar(this.id).subscribe(
      (res: any) => {
        this.avatar = res;
      }
    )
    console.log(this.id);
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    
  }




    onSelectFile(event) {
      if (event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.fileImage = file;
       // this.f['profile'].setValue(file);
    
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
    
      }
    }
  

   updatePassword(){
    this.userService.updatePassword(this.email,this.oldPassword,this.newPassword).subscribe( 
       data => {
      this.userService.toastMessage('Password changed successfully');
    }
    ,(error)=>{
      this.userService.toastMessage('Failed action')
     } ); 
    
    }


}
