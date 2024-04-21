import { Voucher } from '../../entity/VoucherInterface';

export interface SaveVoucherInterface {
  execute: (voucher: Voucher) => Promise<void>
}
