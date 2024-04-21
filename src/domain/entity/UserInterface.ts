import { BaseUser } from './BaseInterface';

export interface User extends BaseUser {
  ubicacion?: string
  historial_reciclaje?: string
  puntosAcumulados?: number
  vouchers?: string
  beneficiosObtenidos?: string
}
