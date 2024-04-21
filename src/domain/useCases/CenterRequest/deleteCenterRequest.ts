import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface DeleteCenterRequestInterface {
  execute: (CenterRequestToDelete: CenterRequest) => Promise<void>
}
