import { Voucher } from '../../domain/entity/VoucherInterface';
import { VoucherRepositoryInterface } from '../../domain/repository/VoucherRepository';
import { DeleteVoucherInterface } from '../../domain/useCases/Voucher/deleteVoucher';

export default class DeleteRecyclingPoint implements DeleteVoucherInterface {
  VoucherRepository: VoucherRepositoryInterface;

  constructor(VoucherRepository: VoucherRepositoryInterface) {
    this.VoucherRepository = VoucherRepository;
  }

  async execute(VoucherToDelete: Voucher): Promise<void> {
    const result = await this.VoucherRepository.deleteById(VoucherToDelete.id);
    return result;
  }
}
