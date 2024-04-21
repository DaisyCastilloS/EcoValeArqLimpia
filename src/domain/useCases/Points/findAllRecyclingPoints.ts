import { RecyclingPoint } from '../../entity/PointsInterface';

export interface FindAllRecyclingPointInterface {
  execute: (RecyclingPointToFind: RecyclingPoint) => Promise<RecyclingPoint[]>
}
