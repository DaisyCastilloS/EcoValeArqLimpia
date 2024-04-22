import { MaterialRecicled } from '../../domain/entity/MaterialInterface';

export interface MaterialRecicledServiceInterface {
  getAll: () => Promise<MaterialRecicled[] | undefined>;
  save(modality: MaterialRecicled): Promise<void>;
  findById(id: string): Promise<MaterialRecicled | undefined>;
  findByName: (name: string) => Promise<MaterialRecicled[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<MaterialRecicled[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<MaterialRecicled[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ MaterialRecicleds: MaterialRecicled[]; total: number }>;
}
