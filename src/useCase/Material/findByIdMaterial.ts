import { MaterialRecicled } from '../../domain/entity/MaterialInterface';
import { MaterialRecicledRepositoryInterface } from '../../domain/repository/MaterialRepository';
import { FindByIdMaterialRecicledInterface } from '../../domain/useCases/Material/findByIdMaterial';

export default class DeleteMaterialRecicled implements FindByIdMaterialRecicledInterface {
  MaterialRecicledRepository: MaterialRecicledRepositoryInterface;

  constructor(MaterialRecicledRepository: MaterialRecicledRepositoryInterface) {
    this.MaterialRecicledRepository = MaterialRecicledRepository;
  }

  async execute(id: string): Promise<MaterialRecicled | undefined> {
    const result = await this.MaterialRecicledRepository.findById(id);
    return result;
  }
}
