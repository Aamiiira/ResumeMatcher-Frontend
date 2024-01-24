import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {

  public fileImage: File;
  public message: string;
  id:number;
  constructor(private route: ActivatedRoute, private router:Router,private tokenStorageService: TokenStorageService,
    ) { }

  ngOnInit() {
    
    const user = this.tokenStorageService.getUser();
    this.id = user.id;

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



}
