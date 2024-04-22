import { RecyclingPoint } from '../../entity/PointsInterface';

export interface FindAllRecyclingPointByDateInterface {
  execute: () => Promise<RecyclingPoint[] | []>
}
