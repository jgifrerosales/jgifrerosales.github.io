export class Project {
  constructor(
    public name: string,
    public subtitle: string,
    public description: string,
    public images?: string[],
    public videos?: string[],
    public demo?: string
  ){}
}

export class ProjectList {
  constructor(
    public projects: Project[]
  ){}
}
