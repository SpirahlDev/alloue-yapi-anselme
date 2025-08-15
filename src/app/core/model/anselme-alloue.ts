import { IProject } from '../interfaces/IProject';
import { ITechnology} from '../interfaces/ITechnology';
import { Person } from './person';
import { PROJECTS_DATA } from '../database/project-data';
import { TECHNICAL_STACKS } from '../database/technical-stack-data';

export class AnselmeAlloue extends Person {
  protected override technoRawData: ITechnology[] = TECHNICAL_STACKS;
  protected override projectRawData: IProject[] = PROJECTS_DATA;
 
  socialLinks={
    github:"https://github.com/SpirahlDev",
    linkedin:"https://www.linkedin.com/in/alloue-yapi-anselme"
  };

  constructor() {
    super();
    this.localisation = "Abidjan, Côte d'Ivoire";
    this.birthDate = new Date('2004-05-07');
    this.phone = '+225 01 02 80 49 64';

    // Initialisation des données après que les propriétés privées soient définies
    this.loadSkills();
    this.loadTechnologies();
    this.loadProject();
  }

  loadSkills() {
    this.skills = [
      "Développement d'application Web",
      "Développement d'application Mobile",
      'UI/UX Design',
      'Intégration et Déploiement continue (CI/CD)',
    ];
  }


}
