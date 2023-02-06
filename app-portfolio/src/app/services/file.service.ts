import { Injectable } from "@angular/core";

@Injectable()
export class FileService {

  constructor() {}

  doDownloadFile(filename: string, filepath: string) {
    let link = document.createElement("a");
    link.download = filename;
    link.href = filepath;
    link.click();
  }

}
