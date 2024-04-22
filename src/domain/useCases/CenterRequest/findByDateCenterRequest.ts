import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface FindAllCenterRequestByDateInterface {
  execute: () => Promise<CenterRequest[] | []>
}
