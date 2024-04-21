// Define la interfaz para un voucher (Voucher)
export interface Voucher {
  id: string
  codigo: string
  titulo: string
  descripcion?: string
  duracion: {
    inicio: Date
    fin: Date
  }
  stores: string[] // Array de IDs de tiendas (stores)
  usuario: string // ID del usuario que adquiere el voucher
  recyclingcompany: string // ID de la empresa de reciclaje asociada al voucher
  estado: 'activo' | 'usado' | 'vencido'
  ptoscanjevoucher: number
  createdAt: Date
  updatedAt: Date
  recycledMaterials: string[] // Array de IDs de materiales reciclados asociados al voucher
}
