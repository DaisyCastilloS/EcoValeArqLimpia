import { Voucher } from '../../entity/VoucherInterface';

export interface FindAllVoucherInterface {
  execute: (GetAllVouchers: Voucher) => Promise<Voucher[] | undefined>
}
