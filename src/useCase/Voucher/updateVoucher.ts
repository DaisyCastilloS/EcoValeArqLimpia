import { Voucher } from '../../domain/entity/VoucherInterface';
import { VoucherRepositoryInterface } from '../../domain/repository/VoucherRepository';
import { UpdateVoucherInterface } from '../../domain/useCases/Voucher/updateVoucher';

export default class UpdateVouchers implements UpdateVoucherInterface {
  VoucherRepository: VoucherRepositoryInterface;

  constructor(VoucherRepository: VoucherRepositoryInterface) {
    this.VoucherRepository = VoucherRepository;
  }

  async execute(VoucherToUpdate: Voucher): Promise<void> {
    const result = await this.VoucherRepository.updateById(VoucherToUpdate.id);
    return result;
  }
}
