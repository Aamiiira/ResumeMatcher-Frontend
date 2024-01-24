/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { UploadfileService } from 'src/app/services/uploadfile.service';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class PdfService {
  public fileCV: File;
  private baseUrl = 'http://localhost:5000'; // remplacer par l'adresse de votre backend Flask

  constructor(private http: HttpClient) { }

  uploadPdf(fileCV: File): Promise<number> {
    const formData = new FormData();
    formData.append('fileCV', File.name);
    return this.http.post<number>(`${this.baseUrl}/process-pdf`, formData).toPromise();
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { UploadfileService } from 'src/app/services/uploadfile.service';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private baseUrl = 'http://localhost:5000'; // Replace with your Flask backend address
  constructor(private http: HttpClient) { }

  uploadPdf(fileCV: File): Promise<number> {
    const formData = new FormData();
    formData.append('fileCV', fileCV);
    return this.http.post<number>(`${this.baseUrl}/process-pdf`, formData).toPromise();
  }
}
