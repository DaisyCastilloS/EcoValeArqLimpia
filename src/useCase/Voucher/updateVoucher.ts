import { Voucher } from '../../entity/VoucherInterface';

export interface UpdateVoucherInterface {
  execute: (Voucher: Voucher) => Promise<void>
}
