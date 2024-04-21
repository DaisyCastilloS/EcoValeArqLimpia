import { Voucher } from '../../entity/VoucherInterface';

export interface UpdateVoucherInterface {
  execute: (VoucherToUpdate: Voucher) => Promise<void>
}
