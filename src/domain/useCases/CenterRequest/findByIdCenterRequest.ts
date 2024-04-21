import { CenterRequest } from '../../entity/CenterRequestInterface';

export interface FindByIdCenterRequestInterface {
  execute: (id: string) => Promise<CenterRequest>
}
