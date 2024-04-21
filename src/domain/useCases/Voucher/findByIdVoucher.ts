import { Voucher } from '../../entity/VoucherInterface';

export interface FindByIdVoucherInterface {
  execute: (id: string) => Promise<Voucher | undefined>
}
