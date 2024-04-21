import { RecyclingPoint } from '../../domain/entity/PointsInterface';
import { RecyclingPointRepositoryInterface } from '../../domain/repository/PointsRepository';
import { UpdateRecyclingPointInterface } from '../../domain/useCases/Points/updateRecyclingPoints';

export default class DeleteRecyclingPoint implements UpdateRecyclingPointInterface {
  RecyclingPointRepository: RecyclingPointRepositoryInterface;

  constructor(RecyclingPointRepository: RecyclingPointRepositoryInterface) {
    this.RecyclingPointRepository = RecyclingPointRepository;
  }

  async execute(RecyclingPointToUpdate: RecyclingPoint): Promise<void> {
    const result = await this.RecyclingPointRepository.save(RecyclingPointToUpdate);
    return result;
  }
}
