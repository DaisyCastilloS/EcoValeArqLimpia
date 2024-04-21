import { RecyclingPoint } from '../../domain/entity/PointsInterface';
import { RecyclingPointRepositoryInterface } from '../../domain/repository/PointsRepository';
import { DeleteRecyclingPointInterface } from '../../domain/useCases/Points/deleteRecyclingPoints';

export default class DeleteRecyclingPoint implements DeleteRecyclingPointInterface {
  RecyclingPointRepository: RecyclingPointRepositoryInterface;

  constructor(RecyclingPointRepository: RecyclingPointRepositoryInterface) {
    this.RecyclingPointRepository = RecyclingPointRepository;
  }

  async execute(RecyclingPointToDelete: RecyclingPoint): Promise<void> {
    const result = await this.RecyclingPointRepository.deleteById(RecyclingPointToDelete.id);
    return result;
  }
}
