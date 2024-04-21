import { MaterialRecicled } from '../../entity/MaterialInterface';

export interface FindAllMaterialRecicledInterface {
  execute: (getAllMaterialRecicleds: MaterialRecicled) => Promise<MaterialRecicled[] | undefined>

}
