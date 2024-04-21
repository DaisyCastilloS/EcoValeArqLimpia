import { MaterialRecicled } from '../../domain/entity/MaterialInterface';
import { MaterialRecicledRepositoryInterface } from '../../domain/repository/MaterialRepository';
import { FindAllMaterialRecicledInterface } from '../../domain/useCases/Material/findAllMaterial';

export default class DeleteMaterialRecicled implements FindAllMaterialRecicledInterface {
  MaterialRecicledRepository: MaterialRecicledRepositoryInterface;

  constructor(MaterialRecicledRepository: MaterialRecicledRepositoryInterface) {
    this.MaterialRecicledRepository = MaterialRecicledRepository;
  }

  async execute(): Promise<MaterialRecicled[] | undefined> {
    const result = await this.MaterialRecicledRepository.getAll();
    return result;
  }
}
