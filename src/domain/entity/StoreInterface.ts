// Define la interfaz para una tienda (Store)
export interface Store {
  id: string
  nombrestore: string
  empresaId: string // ID de la empresa a la que pertenece la tienda
  createdAt?: Date // Fecha de creación (opcional)
  updatedAt?: Date // Fecha de última actualización (opcional)
}
