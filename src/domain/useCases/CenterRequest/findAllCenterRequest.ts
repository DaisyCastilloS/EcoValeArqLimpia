import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface FindAllCenterRequestInterface {
  execute: () => Promise<CenterRequest[]>
}
