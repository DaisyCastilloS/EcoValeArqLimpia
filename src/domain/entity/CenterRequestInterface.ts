// Define la interfaz para un centro de reciclaje
export interface CenterRequest {
  id: string
  usuario: string[] // Array de IDs de usuarios (pueden ser IDs de tipo string)
  materialaRecolectar: string[] // Array de IDs de materiales (pueden ser IDs de tipo string)
  ubicacionRecoleccion: string
  fecha_recoleccion: Date
  hora_recoleccion: Date
  estadoSolicitud: string
}
