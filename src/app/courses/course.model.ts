import { Section } from "../shared/section.model";


export class Course{
  public name: string;
  public description: string;
  public imagePath: string;
  public sections: Section[];
  
  constructor(name: string, desc: string, imagePath: string, sections: Section[]){
    this.description = desc;
    this.name = name;
    this.imagePath = imagePath;
    this.sections = sections;
  }

}


