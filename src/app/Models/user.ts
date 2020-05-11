import { Currentcrew } from './currentcrew';

export class User {
  id: number;
  email: string;
  admin: boolean;
  lastname: string;
  firstname: string;
  github: string;
  banished: boolean;
  fullname: string;
  main_role: string;
  current_crew: Currentcrew;
  authorities: any[];
}
