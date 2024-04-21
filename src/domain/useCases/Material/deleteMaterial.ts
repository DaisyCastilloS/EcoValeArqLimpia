import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface DeleteMaterialRecicledInterface {
  execute: (MaterialRecicledToDelete: MaterialRecicled) => Promise<void>
}
