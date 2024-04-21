import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface UpdateMaterialRecicledInterface {
  execute: (MaterialRecicledToUpdate: MaterialRecicled) => Promise<void>
}
