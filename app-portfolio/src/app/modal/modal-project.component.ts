import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Project } from '../model/projects';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss'],
})
export class ModalProjectComponent implements OnInit {

  apiLoaded: boolean = false;

  project: Project;

  carouselItems: any[] = []

  title: string | null = null;

  constructor(public modalRef: MdbModalRef<ModalProjectComponent>) {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    let content = document.getElementById("content");
    if (content) content.insertAdjacentHTML('afterend',this.project.description);

    this.carouselItems = [];
    if (this.project.videos != undefined && this.project.videos.length > 0) {
      this.project.videos.forEach(video => {
        this.carouselItems.push({src: video, type: 'video'});
      });
    }
    if (this.project.images != undefined && this.project.images.length > 0) {
      this.project.images.forEach(image => {
        this.carouselItems.push({src: image, type: 'image'});
      });
    }
  }
}
