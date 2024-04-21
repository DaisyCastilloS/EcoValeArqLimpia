import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface FindByIdMaterialRecicledInterface {
  execute: (id: string) => Promise<MaterialRecicled | undefined>
}
