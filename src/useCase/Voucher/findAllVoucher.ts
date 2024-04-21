import { Voucher } from '../../entity/VoucherInterface';

export interface FindAllVoucherInterface {
  execute: (Voucher: Voucher) => Promise<void>
}
