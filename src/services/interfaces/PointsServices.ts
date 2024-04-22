import { RecyclingPoint } from '../../domain/entity/PointsInterface';

export interface RecyclingPointServiceInterface {
  getAll: () => Promise<RecyclingPoint[] | undefined>;
  save(modality: RecyclingPoint): Promise<void>;
  findById(id: string): Promise<RecyclingPoint | undefined>;
  findByName: (name: string) => Promise<RecyclingPoint[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<RecyclingPoint[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<RecyclingPoint[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ RecyclingPoints: RecyclingPoint[]; total: number }>;
}
