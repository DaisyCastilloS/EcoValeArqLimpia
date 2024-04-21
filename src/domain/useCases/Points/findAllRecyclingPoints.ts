import { RecyclingPoint } from '../../entity/PointsInterface';

export interface FindAllRecyclingPointInterface {
  execute: (GetAllRecyclingPoints: RecyclingPoint) => Promise<RecyclingPoint[] | undefined>
}
