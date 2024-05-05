import { RecyclingPoint } from '../../domain/entity/PointsInterface';

export interface RecyclingPointServiceInterface {
  getAll: () => Promise<RecyclingPoint[] | undefined>;
  save(modality: RecyclingPoint): Promise<void>;
  findById(id: string): Promise<RecyclingPoint | undefined>;
  findByName: (name: string) => Promise<RecyclingPoint[]>;
  updateById(id: string, updatedFields: Partial<RecyclingPoint>): Promise<any>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<RecyclingPoint[] | []>;
  getCount: () => Promise<number>;


}
