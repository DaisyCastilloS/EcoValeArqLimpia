import { Voucher } from '../../entity/VoucherInterface';

export interface DeleteVoucherInterface {
  execute: (VoucherToDelete: Voucher) => Promise<void>
}
