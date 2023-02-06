import { Component } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {

  filename: string = "JoaquimGifreRosales_CV.pdf";
  filepath: string = "assets/docs/JoaquimGifreRosales_CV.pdf";

  constructor(
    private fileService: FileService
  ) {}

  downloadFile(){
    this.fileService.doDownloadFile(this.filename, this.filepath);
  }
}
