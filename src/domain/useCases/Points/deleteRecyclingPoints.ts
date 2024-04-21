import { RecyclingPoint } from '../../entity/PointsInterface';

export interface DeleteRecyclingPointInterface {
  execute: (RecyclingPointToDelete: RecyclingPoint) => Promise<void>
}
