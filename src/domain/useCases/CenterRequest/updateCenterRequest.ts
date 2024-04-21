import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface UpdateCenterRequestInterface {
  execute: (CenterRequestToUpdate: CenterRequest) => Promise<void>
}
