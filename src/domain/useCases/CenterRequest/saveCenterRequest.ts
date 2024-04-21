import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface SaveCenterRequestInterface {
  execute: (CenterRequestToSave: CenterRequest) => Promise<void>
}
