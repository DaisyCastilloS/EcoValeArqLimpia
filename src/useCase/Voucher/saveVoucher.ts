import { Voucher } from '../../entity/VoucherInterface';

export interface SaveVoucherInterface {
  execute: (Voucher: Voucher) => Promise<void>
}
