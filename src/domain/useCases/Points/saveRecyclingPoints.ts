import { RecyclingPoint } from '../../entity/PointsInterface';

export interface SaveRecyclingPointInterface {
  execute: (RecyclingPointToSave: RecyclingPoint) => Promise<void>
}
