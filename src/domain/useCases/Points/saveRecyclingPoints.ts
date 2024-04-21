import { RecyclingPoint } from '../../entity/PointsInterface';

export interface SaveRecyclingPointInterface {
  execute: (recyclingPoint: RecyclingPoint) => Promise<void>
}
