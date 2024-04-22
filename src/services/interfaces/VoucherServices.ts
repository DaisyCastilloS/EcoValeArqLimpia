import { Voucher } from '../../domain/entity/VoucherInterface';

export interface VoucherServiceInterface {
  getAll: () => Promise<Voucher[] | undefined>;
  save(modality: Voucher): Promise<void>;
  findById(id: string): Promise<Voucher | undefined>;
  findByName: (name: string) => Promise<Voucher[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Voucher[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<Voucher[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Vouchers: Voucher[]; total: number }>;
}
