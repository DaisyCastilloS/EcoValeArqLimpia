import { CenterRequest } from '../domain/entity/CenterRequestInterface';
import { CenterRequestServiceInterface } from './interfaces/CenterRequestService';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'Admin';
export default class PGDataSourceServiceCenterRequest implements CenterRequestServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(centerRequest: CenterRequest): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,usuario,materialaRecolectar,ubicacionRecoleccion,fecha_recoleccion,hora_recoleccion, estadoSolicitud,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);`, [centerRequest.id, centerRequest.usuario, centerRequest.materialaRecolectar, centerRequest.ubicacionRecoleccion, centerRequest.estadoSolicitud, centerRequest.createdAt, centerRequest.updatedAt]);
  }

  async findById(id: string): Promise<CenterRequest | undefined> {
    const dbResponse = await this.db.query(`select id from ${DB_TABLE} where id = $1 limit 1;`, [id]);
    const result = dbResponse.rows.map((item) => ({
      id: item.id,
      usuario: item.usuario,
      materialaRecolectar: item.materialaRecolectar,
      ubicacionRecoleccion: item.ubicacionRecoleccion,
      estadoSolicitud: item.estadoSolicitud,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    return result[0];
  }

  async updateById(id: string): Promise<void> {
    const dbResponse = await this.db.query(`UPDATE ${DB_TABLE}
    SET
        id = $1,
        usuario = $2,
        materialaRecolectar = $3,
        ubicacionRecoleccion = $4,
        fecha_recoleccion = $5,
        createdAt = $6,
        updatedAt = $7,
    WHERE id = $1;
`, [id]);
    const result = dbResponse.rows.map((item) => ({
      id: item.id,
      usuario: item.usuario,
      materialaRecolectar: item.materialaRecolectar,
      ubicacionRecoleccion: item.ubicacionRecoleccion,
      estadoSolicitud: item.estadoSolicitud,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return result;
  }
}
