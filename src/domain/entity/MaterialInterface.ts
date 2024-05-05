export interface MaterialRecicled {
  id: string
  nombrematerial: string
  descripcion: string
  pesoMaterial: number
  imagen?: string
  ticketsRelacionados: string[]
  centrosReciclaje: string[]
  createdAt: Date
  updatedAt: Date
}
