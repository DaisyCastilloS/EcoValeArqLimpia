import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface FindAllMaterialRecicledByDateInterface {
  execute: () => Promise<MaterialRecicled[] | []>
}
