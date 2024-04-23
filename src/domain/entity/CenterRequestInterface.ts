// Define la interfaz para un centro de reciclaje
export interface CenterRequest {
  id: string
  usuario: string[] // Array de IDs de usuarios (pueden ser IDs de tipo string)
  materialaRecolectar: string[] // Array de IDs de materiales (pueden ser IDs de tipo string)
  ubicacionRecoleccion: string
  estadoSolicitud: string
  createdAt: Date
  updatedAt: Date
}
