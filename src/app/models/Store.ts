import { Categories } from "./Categories";
import { User } from "./User";

export interface Store {
  id: number;
  OwnerId: number;
  name: string;
  description: string;
  categories: Categories[];

  // joined: Date;

}
