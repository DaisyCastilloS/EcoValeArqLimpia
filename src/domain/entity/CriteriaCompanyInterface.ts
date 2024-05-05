export interface RecyclingCompanySearchCriteria {
  id: string;
  nombreempresa: string;
  recycledMaterials: string[]
  direccion: string,
  sortBy?: 'nombreempresa' | 'direccion' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;

  // Otras propiedades...
}
