import { BaseUser } from './BaseInterface';

export interface Admin extends BaseUser {
  isAdmin: boolean
  empresas: String[]
}
