import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface SaveMaterialRecicledInterface {
  execute: (materialRecicled: MaterialRecicled) => Promise<void>
}
