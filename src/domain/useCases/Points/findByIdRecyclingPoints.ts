import { RecyclingPoint } from '../../entity/PointsInterface';

export interface FindByIdRecyclingPointInterface {
  execute: (id: string) => Promise<RecyclingPoint | undefined>
}
