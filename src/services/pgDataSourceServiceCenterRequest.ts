import { CenterRequest } from '../domain/entity/CenterRequestInterface';
import { CenterRequestServiceInterface } from './interfaces/CenterRequestService';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'center';
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

  //actualizar campo materialarecolectar usando la id desde el front 
  async updateById(id: string, newMaterial: string): Promise<void> {
    try {
      const query = `
        UPDATE
          ${DB_TABLE}
        SET
          materialaRecolectar = $1,
          updatedAt = NOW() -- Actualiza el campo updatedAt con la fecha y hora actual
        WHERE
          id = $2;`; // Filtra la actualización por la id proporcionada

      await this.db.query(query, [newMaterial, id]); // Ejecuta la consulta SQL con los parámetros

    } catch (error) {
      throw new Error(`Error al actualizar por ID (${id}): ${error.message}`);
    }
  }

  //buscr por materialaRecolectar 
  async findByName(materialaRecolectar: string): Promise<CenterRequest[]> {
    try {
      const query = `
        SELECT
          id,
          usuario,
          materialaRecolectar,
          ubicacionRecoleccion,
          estadoSolicitud,
          createdAt,
          updatedAt
        FROM
          ${DB_TABLE}
        WHERE
        materialaRecolectar = $1;`;
      const dbResponse = await this.db.query(query, [materialaRecolectar]);
      const result: CenterRequest[] = dbResponse.rows.map((item) => ({
        id: item.id,
        usuario: item.usuario,
        materialaRecolectar: item.materialaRecolectar,
        ubicacionRecoleccion: item.ubicacionRecoleccion,
        estadoSolicitud: item.estadoSolicitud,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));

      return result;
    } catch (error) {
      throw new Error(`Error al buscar por materialaRecolectar (${materialaRecolectar}): ${error.message}`);
    }
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
    try {
      const query = `
        SELECT
          id,
          usuario,
          materialaRecolectar,
          ubicacionRecoleccion,
          estadoSolicitud,
          createdAt,
          updatedAt
        FROM
          ${DB_TABLE}
        WHERE
          DATE(createdAt) = $1;`; // Filtra por la fecha de creación (createdAt)

      const dbResponse = await this.db.query(query, [date]);
      const centerRequests: CenterRequest[] = dbResponse.rows.map((row) => ({
        id: row.id,
        usuario: row.usuario,
        materialaRecolectar: row.materialaRecolectar,
        ubicacionRecoleccion: row.ubicacionRecoleccion,
        estadoSolicitud: row.estadoSolicitud,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      }));

      return centerRequests;
    } catch (error) {
      throw new Error(`Error al buscar por fecha (${date}): ${error.message}`);
    }
  }

  //cantidad total de centerrequest 
  async getCount(): Promise<number> {
    try {
      const query = `
        SELECT
          COUNT(*)
        FROM
          ${DB_TABLE};`;

      const dbResponse = await this.db.query(query);
      const count = parseInt(dbResponse.rows[0].count, 10); // Parsea el resultado a un número entero

      return count;
    } catch (error) {
      throw new Error(`Error al obtener el conteo de registros: ${error.message}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      const query = `
        DELETE FROM
          ${DB_TABLE}
        WHERE
          id = $1;`; // Filtra la eliminación por la id proporcionada

      await this.db.query(query, [id]); // Ejecuta la consulta SQL con el parámetro de ID

    } catch (error) {
      throw new Error(`Error al eliminar por ID (${id}): ${error.message}`);
    }
  }

  async existsById(id: string): Promise<boolean> {
    try {
      const query = `
        SELECT
          EXISTS (
            SELECT 1
            FROM ${DB_TABLE}
            WHERE id = $1
          );`;

      const dbResponse = await this.db.query(query, [id]);
      const exists = dbResponse.rows[0].exists;

      return exists;
    } catch (error) {
      throw new Error(`Error al verificar existencia por ID (${id}): ${error.message}`);
    }
  }

  
}



