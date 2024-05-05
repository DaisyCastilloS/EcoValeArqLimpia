import { MaterialRecicled } from '../domain/entity/MaterialInterface';
import { MaterialRecicledServiceInterface } from './interfaces/MaterialServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'MaterialRecicled';
export default class PGDataSrcServiceMaterialRecicled implements MaterialRecicledServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(materialRecicled: MaterialRecicled): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,nombrematerial,descripcion,pesoMaterial,imagen,ticketsRelacionados,centrosReciclaje,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`, [materialRecicled.id, materialRecicled.nombrematerial, materialRecicled.descripcion, materialRecicled.pesoMaterial, materialRecicled.imagen, materialRecicled.ticketsRelacionados, materialRecicled.centrosReciclaje, materialRecicled.createdAt, materialRecicled.updatedAt]);
  }

  async findById(id: string): Promise<MaterialRecicled | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<MaterialRecicled[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(nombrematerial: string): Promise<MaterialRecicled[] | []> {
    const dbResponse = await this.db.query(`SELECT nombre FROM ${DB_TABLE} WHERE nombre = $1 LIMIT 4;`, [nombrematerial]);
    const result = dbResponse.rows.map((MaterialRecicledRow) => MaterialRecicledRow.nombrematerial);
    return result;
  }

  // quiero que actualie solo descripcion
  async updateById(id: string, description: string): Promise<void> {
    const query = `
        UPDATE ${DB_TABLE} 
        SET description = $1, updatedAt = CURRENT_TIMESTAMP 
        WHERE id = $2;
    `;
    await this.db.query(query, [description, id]);
  }

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // tipo MaterialRecicled acceder a todos los campos, quiero devolver solo nombre, apellido y email
  async getAll(): Promise<MaterialRecicled[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS MaterialRecicledCount FROM ${DB_TABLE} WHERE isMaterialRecicled = true;`,
    );
    return parseInt(dbResponse.rows[0].date, 10);
  }

  async existsById(id: string): Promise<boolean> {
    // Ejecuta una consulta SQL para verificar si existe una empresa con el ID dado
    const result = await this.db.query(
      `
      SELECT COUNT(*) AS count
      FROM ${DB_TABLE}
      WHERE id = $1
      `,
      [id],
    );

    // Si el recuento es mayor que cero, significa que existe una empresa con ese ID
    return result.rows[0].count > 0;
  }
}
