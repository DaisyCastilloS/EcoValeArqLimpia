import { CenterRequest } from '../../domain/entity/CenterRequestInterface';

export interface CenterRequestServiceInterface {
  getAll: () => Promise<CenterRequest[] | undefined>;
  save(modality: CenterRequest): Promise<void>;
  findByIdmaterial(id: string): Promise<{ materialaRecolectar: string; } | undefined>;
  findByIdubicacion(id: string): Promise<{ ubicacionRecoleccion: string; } | undefined>;
  updateById: (id: string, newMaterial: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<CenterRequest[] | []>;
  getCount: () => Promise<number>;

  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ CenterRequests: CenterRequest[]; total: number }>;
}
