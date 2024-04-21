import { RecyclingPoint } from '../../domain/entity/PointsInterface';
import { RecyclingPointRepositoryInterface } from '../../domain/repository/PointsRepository';
import { FindByIdRecyclingPointInterface } from '../../domain/useCases/Points/findByIdRecyclingPoints';

export default class DeleteRecyclingPoint implements FindByIdRecyclingPointInterface {
  RecyclingPointRepository: RecyclingPointRepositoryInterface;

  constructor(RecyclingPointRepository: RecyclingPointRepositoryInterface) {
    this.RecyclingPointRepository = RecyclingPointRepository;
  }

  async execute(id: string): Promise<RecyclingPoint | undefined> {
    const result = await this.RecyclingPointRepository.findById(id);
    return result;
  }
}
