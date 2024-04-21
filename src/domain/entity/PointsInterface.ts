export interface RecyclingPoint {
  id: string
  type: string // Solo permitimos "Point"
  coordinates: [number, number]
  properties?: {
    name?: string // Nombre opcional del punto de reciclaje
    [key: string]: any // Propiedades adicionales (cualquier propiedad adicional)
  }
}
