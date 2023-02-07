import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalProjectComponent } from '../modal/modal-project.component';
import { Project, ProjectList } from '../model/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent implements OnInit {

  modalRef: MdbModalRef<ModalProjectComponent> | null = null;

  projectList: ProjectList;

  constructor(
    private projectService: ProjectService,
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
    this.projectService.getProjectsFromFile()
      .subscribe(response => {
        this.projectList = response;
      }, error => {
        console.log(error);
      });
  }

  openProjectDetailModal(project: Project) {
    this.modalRef = this.modalService.open(ModalProjectComponent, {data: {project: project}, modalClass: "modal-lg"});
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

}
