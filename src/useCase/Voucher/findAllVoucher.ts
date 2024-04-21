import { Voucher } from '../../domain/entity/VoucherInterface';
import { VoucherRepositoryInterface } from '../../domain/repository/VoucherRepository';
import { FindAllVoucherInterface } from '../../domain/useCases/Voucher/findAllVoucher';

export default class FindAllVouchers implements FindAllVoucherInterface {
  VoucherRepository: VoucherRepositoryInterface;

  constructor(VoucherRepository: VoucherRepositoryInterface) {
    this.VoucherRepository = VoucherRepository;
  }

  async execute(): Promise<Voucher[] | undefined> {
    const result = await this.VoucherRepository.getAll();
    return result;
  }
}
