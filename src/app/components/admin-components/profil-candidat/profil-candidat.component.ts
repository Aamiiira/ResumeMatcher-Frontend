/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { PdfService } from '../../../services/Pdf.Service';
import { UploadfileService } from '../../../services/uploadfile.service';
@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  public fileCV: File;
  id: number ;
  candidate : Candidate = new Candidate();
  
  selectedFile: File = null;
matchPercentage: number = null;
  constructor(private route: ActivatedRoute, private candidateService : CandidateService,
    private userService : UserService , private http: HttpClient , private pdfService: PdfService , private uploadService: UploadfileService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCandidate();
    
  }

  getCandidate() {
    console.log(this.id);
    this.candidateService.getCandidate(this.id).subscribe(
      response => {
        this.candidate = response ; }
    );
  }

  sendConfirmMsg(id) {
    this.candidateService.sendConfirmMessage(id).subscribe(  (candidate) => {
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
    
  };

  

  sendDenyMsg(id) {
    this.candidateService.sendDenyMessage(id)
    .subscribe( (candidate) =>{
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
   
  };
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    }
    
    async onUpload(event) {
      this.fileCV = event.target.files[0];
    this.matchPercentage = await this.pdfService.uploadPdf(this.selectedFile);
    }
}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { PdfService } from '../../../services/Pdf.Service';


@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  public fileCV: File;
  resumeFile!: File;
  jobDescriptionFile!: File;
  matchPercentage!: number;

  public id: number;
  public candidate: Candidate = new Candidate();

  constructor(private route: ActivatedRoute, private candidateService: CandidateService,
              private userService: UserService, private http: HttpClient, private pdfService: PdfService,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCandidate();
  }

  getCandidate() {
    console.log(this.id);
    this.candidateService.getCandidate(this.id).subscribe(
      response => {
        this.candidate = response;
      }
    );
  }

  sendConfirmMsg(id) {
    this.candidateService.sendConfirmMessage(id).subscribe((candidate) => {
      this.userService.toastMessage("Email sent successfully");
    }, (error) => {
      this.userService.toastMessage("Error: Email not sent.");
    });
  }

  sendDenyMsg(id) {
    this.candidateService.sendDenyMessage(id).subscribe((candidate) => {
      this.userService.toastMessage("Email sent successfully");
    }, (error) => {
      this.userService.toastMessage("Error: Email not sent.");
    });
  }

  onFileSelected(event: any) {
    this.fileCV = event.target.files[0] as File;
  }



  onResumeFileSelected(event: any) {
    this.resumeFile = event.target.files[0];
  }

  onJobDescriptionFileSelected(event: any) {
    this.jobDescriptionFile = event.target.files[0];
  }

  compareFiles() {
    const formData = new FormData();
    formData.append('resume', this.resumeFile);
    formData.append('job_desc', this.jobDescriptionFile);
  
    this.http.post<any>('http://localhost:5000/compare-resume', formData)
      .subscribe(
        response => {
          console.log(response);
          this.matchPercentage = response.match_percentage;
        },
        error => {
          console.log(error);
        }
      );
  }

  
}