// Define la interfaz para un ticket (Ticket)
export interface Ticket {
  id: string
  titulo: string
  descripcionTicket: string
  puntos: number
  status: 'Abierto' | 'En Progreso' | 'Cerrado'
  asignadoA?: string // ID del usuario asignado (opcional)
  materialesRelacionados: string[] // Array de IDs de materiales relacionados
  CompanyRelacionada?: string // ID de la empresa relacionada (opcional)
  createdAt: Date
  usuarioUtilizado?: string // ID del usuario que utilizó este ticket (opcional)
}
