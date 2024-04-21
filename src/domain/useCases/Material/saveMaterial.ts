import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface SaveMaterialRecicledInterface {
  execute: (MaterialRecicledToSave: MaterialRecicled) => Promise<void>
}
