import { Voucher } from '../../domain/entity/VoucherInterface';
import { VoucherRepositoryInterface } from '../../domain/repository/VoucherRepository';
import { SaveVoucherInterface } from '../../domain/useCases/Voucher/saveVoucher';

export default class FindAllVouchers implements SaveVoucherInterface {
  VoucherRepository: VoucherRepositoryInterface;

  constructor(VoucherRepository: VoucherRepositoryInterface) {
    this.VoucherRepository = VoucherRepository;
  }

  async execute(voucher: Voucher): Promise<void> {
    const result = await this.VoucherRepository.save(voucher);
    return result;
  }
}
