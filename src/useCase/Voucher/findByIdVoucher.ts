import { Voucher } from '../../domain/entity/VoucherInterface';
import { VoucherRepositoryInterface } from '../../domain/repository/VoucherRepository';
import { FindByIdVoucherInterface } from '../../domain/useCases/Voucher/findByIdVoucher';

export default class FindAllVouchers implements FindByIdVoucherInterface {
  VoucherRepository: VoucherRepositoryInterface;

  constructor(VoucherRepository: VoucherRepositoryInterface) {
    this.VoucherRepository = VoucherRepository;
  }

  async execute(id: string): Promise<Voucher | undefined> {
    const result = await this.VoucherRepository.findById(id);
    return result;
  }
}
