import { RecyclingPoint } from '../../entity/PointsInterface';

export interface UpdateRecyclingPointInterface {
  execute: (RecyclingPointToUpdate: RecyclingPoint) => Promise<void>
}
