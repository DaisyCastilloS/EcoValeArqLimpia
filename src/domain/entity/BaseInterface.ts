export interface BaseUser {
  id: string
  nombre: string
  apellido: string
  email: string
  password: string
  roles: string[] // Supongamos que los roles son simplemente strings
  createdAt: Date
  updatedAt: Date
}
