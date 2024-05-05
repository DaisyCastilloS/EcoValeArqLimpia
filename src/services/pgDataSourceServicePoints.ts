import { RecyclingPoint } from '../domain/entity/PointsInterface';
import { RecyclingPointServiceInterface } from './interfaces/PointsServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'RecyclingPoint';
export default class PGDataSourceServiceRecyclingPoint implements RecyclingPointServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(recyclingPoint: RecyclingPoint): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,type,coordinates,properties) values ($1,$2,$3,$4);`, [recyclingPoint.id, recyclingPoint.type, recyclingPoint.coordinates, recyclingPoint.properties]);
  }

  async findById(id: string): Promise<RecyclingPoint | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<RecyclingPoint[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(name: string): Promise<RecyclingPoint[] | []> {
    const dbResponse = await this.db.query(`SELECT properties->>'name' AS name FROM ${DB_TABLE} WHERE nombre = $1 LIMIT 4;`, [name]);
    const result = dbResponse.rows.map((row) => row.name);
    return result;
}

  // como es RecyclingPoint, peude actualizar cualqiera de los campos
  async updateById(id: string, updatedFields: Partial<RecyclingPoint>): Promise<any> {
    const newName = updatedFields.properties?.name;

    if (!newName) {
        throw new Error('El campo "name" no está presente en los campos actualizados.');
    }

    const dbResponse = await this.db.query(
        `UPDATE ${DB_TABLE} 
         SET properties = properties || '{"name": $2}'::jsonb, updatedAt = CURRENT_TIMESTAMP 
         WHERE id = $1;`,
        [id, newName]
    );

    return dbResponse;
}

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // si el tipo RecyclingPoint acceder a todos los campos pero quiero devolver solo nombre, apellido y email
  async getAll(): Promise<RecyclingPoint[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS RecyclingPointCount FROM ${DB_TABLE} WHERE isRecyclingPoint = true;`,
    );
    return parseInt(dbResponse.rows[0].date, 10);
  }

}
