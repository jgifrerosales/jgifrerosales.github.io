import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Project } from '../model/projects';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss'],
})
export class ModalProjectComponent {
  project: Project;

  title: string | null = null;

  constructor(public modalRef: MdbModalRef<ModalProjectComponent>) {}
}
