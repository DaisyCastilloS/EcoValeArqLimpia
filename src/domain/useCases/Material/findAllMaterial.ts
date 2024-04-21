import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface FindAllMaterialRecicledInterface {
  execute: (MaterialRecicledToFind: MaterialRecicled) => Promise<MaterialRecicled[]>

}
