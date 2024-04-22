export interface User {
  id: string
  nombre: string
  apellido: string
  email: string
  password: string
  roles: string[] // Supongamos que los roles son simplemente strings
  createdAt: Date
  updatedAt: Date
  ubicacion?: string
  historial_reciclaje?: string
  puntosAcumulados?: number
  vouchers?: string
  beneficiosObtenidos?: string
}
