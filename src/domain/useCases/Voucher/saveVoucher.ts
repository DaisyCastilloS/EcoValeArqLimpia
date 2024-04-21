import { Voucher } from '../../entity/VoucherInterface';

export interface SaveVoucherInterface {
  execute: (VoucherToSave: Voucher) => Promise<void>
}
