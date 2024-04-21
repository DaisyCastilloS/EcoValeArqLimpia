import { MaterialRecicled } from '../../domain/entity/MaterialInterface';
import { MaterialRecicledRepositoryInterface } from '../../domain/repository/MaterialRepository';
import { DeleteMaterialRecicledInterface } from '../../domain/useCases/Material/deleteMaterial';

export default class DeleteMaterialRecicled implements DeleteMaterialRecicledInterface {
  MaterialRecicledRepository: MaterialRecicledRepositoryInterface;

  constructor(MaterialRecicledRepository: MaterialRecicledRepositoryInterface) {
    this.MaterialRecicledRepository = MaterialRecicledRepository;
  }

  async execute(MaterialRecicledToDelete: MaterialRecicled): Promise<void> {
    const result = await this.MaterialRecicledRepository.deleteById(MaterialRecicledToDelete.id);
    return result;
  }
}
