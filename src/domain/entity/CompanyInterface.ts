export interface RecyclingCompany {
  id: string
  nombreempresa: string
  rubro: string
  direccion: string
  emailempresa: string
  password?: string
  horario_atencion?: string
  vouchers: string[]
  recycledMaterials: string[]
  recyclingPoints: string[]
  updatedAt?: Date
}
