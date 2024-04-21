import { Voucher } from '../../entity/VoucherInterface';

export interface DeleteVoucherInterface {
  execute: (Voucher: Voucher) => Promise<void>
}
