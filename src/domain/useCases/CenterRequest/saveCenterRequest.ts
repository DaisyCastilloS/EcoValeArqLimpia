import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface SaveCenterRequestInterface {
  execute: (centerRequest: CenterRequest) => Promise<void>
}
