import { Voucher } from '../../entity/VoucherInterface';

export interface FindAllVoucherByDateInterface {
  execute: () => Promise<Voucher[] | []>
}
