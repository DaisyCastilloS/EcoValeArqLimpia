import { MaterialRecicled } from '../../domain/entity/MaterialInterface';
import { MaterialRecicledRepositoryInterface } from '../../domain/repository/MaterialRepository';
import { UpdateMaterialRecicledInterface } from '../../domain/useCases/Material/updateMaterial';

export default class DeleteMaterialRecicled implements UpdateMaterialRecicledInterface {
  MaterialRecicledRepository: MaterialRecicledRepositoryInterface;

  constructor(MaterialRecicledRepository: MaterialRecicledRepositoryInterface) {
    this.MaterialRecicledRepository = MaterialRecicledRepository;
  }

  async execute(MaterialRecicledToUpdate: MaterialRecicled): Promise<void> {
    const result = await this.MaterialRecicledRepository.save(MaterialRecicledToUpdate);
    return result;
  }
}
