import { RecyclingPoint } from '../../domain/entity/PointsInterface';
import { RecyclingPointRepositoryInterface } from '../../domain/repository/PointsRepository';
import { FindAllRecyclingPointInterface } from '../../domain/useCases/Points/findAllRecyclingPoints';

export default class DeleteRecyclingPoint implements FindAllRecyclingPointInterface {
  RecyclingPointRepository: RecyclingPointRepositoryInterface;

  constructor(RecyclingPointRepository: RecyclingPointRepositoryInterface) {
    this.RecyclingPointRepository = RecyclingPointRepository;
  }

  async execute(): Promise<RecyclingPoint[]> {
    const result = await this.RecyclingPointRepository.getAll();
    return result;
  }
}
