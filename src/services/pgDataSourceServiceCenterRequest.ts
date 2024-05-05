import { CenterRequest } from '../domain/entity/CenterRequestInterface';
import { CenterRequestServiceInterface } from './interfaces/CenterRequestService';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'center_requests';
export default class PGDataSourceServiceCenterRequest implements CenterRequestServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(centerRequest: CenterRequest): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,usuario,materialaRecolectar,ubicacionRecoleccion,fecha_recoleccion,hora_recoleccion, estadoSolicitud,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);`, [centerRequest.id, centerRequest.usuario, centerRequest.materialaRecolectar, centerRequest.ubicacionRecoleccion, centerRequest.estadoSolicitud, centerRequest.createdAt, centerRequest.updatedAt]);
  }

  async findByIdmaterial(id: string): Promise<{ materialaRecolectar: string } | undefined> {
    const dbResponse = 'SELECT materialaRecolectar FROM center_requests WHERE id = $1 LIMIT 1;';
    const result = await this.db.query(dbResponse, [id]);
    return result.rows[0];
  }

  // a traves de la id, devuelve la ubicacion
  async findByIdubicacion(id: string): Promise<{ ubicacionRecoleccion: string } | undefined> {
    const query = 'SELECT ubicacionRecoleccion FROM center_requests WHERE id = $1 LIMIT 1;';
    const result = await this.db.query(query, [id]);
    return result.rows[0];
  }

  // actualizar campo materialarecolectar usando la id desde el front
  async updateById(id: string, newMaterial: string): Promise<void> {
    const query = 'UPDATE center_requests SET materialaRecolectar = $1 WHERE id = $2;';
    await this.db.query(query, [newMaterial, id]);
  }

  async getAll(): Promise<CenterRequest[] | undefined> {
    const dbResponse = await this.db.query(
      `SELECT id, usuario, materialaRecolectar, ubicacionRecoleccion, estadoSolicitud, createdAt, updatedA
     FROM ${DB_TABLE};`,
    );
    const centers = dbResponse.rows.map((center) => ({
      ...center,
      createdAt: center.createdAt.toISOString(), // Formatear la fecha si es necesario
      updatedAt: center.updatedAt.toISOString(),
    }));
    return centers;
  }

  async findByDate(date: string): Promise<CenterRequest[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  // cantidad total de centerrequest
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS count FROM ${DB_TABLE};`,
    );
    const { count } = dbResponse.rows[0];
    return parseInt(count.date, 10);
  }

  async deleteById(id: string): Promise<void> {
    const query = 'DELETE FROM center_requests WHERE id = $1;';
    await this.db.query(query, [id]);
  }

  async findPaginated(options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ CenterRequests: CenterRequest[]; total: number }> {
    const offset = (options.page - 1) * options.pageSize;
    const sortOrder = options.sortOrder || 'asc';
    const sortBy = options.sortBy || 'createdAt'; // Puedes cambiar el campo de ordenamiento predeterminado según tus necesidades

    // Consulta para obtener las filas de la página actual
    const query = `
      SELECT * FROM ${DB_TABLE}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT $1 OFFSET $2;
    `;
    const resultResponse = await this.db.query(query, [options.pageSize, offset]);
    const centerRequests = resultResponse.rows;

    // Consulta para obtener el número total de filas
    const countQuery = `SELECT COUNT(*) AS total FROM ${DB_TABLE};`;
    const countResponse = await this.db.query(countQuery);
    const total = parseInt(countResponse.rows[0].total, 10);
    return { CenterRequests: centerRequests, total };
  }
}
