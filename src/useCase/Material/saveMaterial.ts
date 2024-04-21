import { MaterialRecicled } from '../../domain/entity/MaterialInterface';
import { MaterialRecicledRepositoryInterface } from '../../domain/repository/MaterialRepository';
import { SaveMaterialRecicledInterface } from '../../domain/useCases/Material/saveMaterial';

export default class DeleteMaterialRecicled implements SaveMaterialRecicledInterface {
  MaterialRecicledRepository: MaterialRecicledRepositoryInterface;

  constructor(MaterialRecicledRepository: MaterialRecicledRepositoryInterface) {
    this.MaterialRecicledRepository = MaterialRecicledRepository;
  }

  async execute(materialRecicled: MaterialRecicled): Promise<void> {
    const result = await this.MaterialRecicledRepository.save(materialRecicled);
    return result;
  }
}