import { RecyclingPoint } from '../../domain/entity/PointsInterface';
import { RecyclingPointRepositoryInterface } from '../../domain/repository/PointsRepository';
import { SaveRecyclingPointInterface } from '../../domain/useCases/Points/saveRecyclingPoints';

export default class DeleteRecyclingPoint implements SaveRecyclingPointInterface {
  RecyclingPointRepository: RecyclingPointRepositoryInterface;

  constructor(RecyclingPointRepository: RecyclingPointRepositoryInterface) {
    this.RecyclingPointRepository = RecyclingPointRepository;
  }

  async execute(recyclingPoint: RecyclingPoint): Promise<void> {
    const result = await this.RecyclingPointRepository.save(recyclingPoint);
    return result;
  }
}
