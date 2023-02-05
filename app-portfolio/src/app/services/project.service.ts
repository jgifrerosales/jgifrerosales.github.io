import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProjectList } from "../model/projects";

@Injectable()
export class ProjectService {

  projectsFileURL: string = "/assets/portfolio/portfolio-projects.json";

  constructor(
    private httpClient: HttpClient
  ) {}

  getProjectsFromFile(): Observable<ProjectList> {
    return this.httpClient.get<ProjectList>(this.projectsFileURL);
  }

}
