import { Voucher } from '../../entity/VoucherInterface';

export interface FindAllVoucherInterface {
  execute: (VoucherToFind: Voucher) => Promise<Voucher[]>
}
