import { RecyclingCompany } from '../domain/entity/CompanyInterface';
import { RecyclingCompanyServiceInterface } from './interfaces/CompanyServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'RecyclingCompany';
export default class PGDataSrcServiceRecyclingCompany implements RecyclingCompanyServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(recyclingCompany: RecyclingCompany): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,nombreempresa,rubro,direccion,emailempresa,password,horario_atencion,vouchers,recycledMaterials,recyclingPoints,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`, [recyclingCompany.id, recyclingCompany.nombreempresa, recyclingCompany.rubro, recyclingCompany.direccion, recyclingCompany.emailempresa, recyclingCompany.password, recyclingCompany.horario_atencion, recyclingCompany.vouchers, recyclingCompany.recycledMaterials, recyclingCompany.recyclingPoints, recyclingCompany.createdAt, recyclingCompany.updatedAt]);
  }

  async findById(id: string): Promise<RecyclingCompany | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<RecyclingCompany[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(nombreempresa: string): Promise<string[] | []> {
    const dbResponse = await this.db.query(`SELECT nombreempresa FROM ${DB_TABLE} WHERE nombreempresa = $1 LIMIT 4;`, [nombreempresa]);
    const result = dbResponse.rows.map((companyRow) => companyRow.nombreempresa);
    return result;
  }

  // empresa peude actualizar emailempresa y password
  async updateById(id: string, updatedFields: Partial<RecyclingCompany>): Promise<void> {
    const { emailempresa, password } = updatedFields;

    // Ejecuta la consulta SQL de actualización
    await this.db.query(
      `
      UPDATE ${DB_TABLE} 
      SET emailempresa = $1, password = $2, updatedAt = CURRENT_TIMESTAMP 
      WHERE id = $3
      `,
      [emailempresa, password, id],
    );
  }

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // el tipo RecyclingCompany accede a todos los campos quiero devolver solo nombre, apellido, email
  async getAll(): Promise<RecyclingCompany[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de empresas registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS RecyclingCompanyCount FROM ${DB_TABLE} WHERE isRecyclingCompany = true;`,
    );
    return parseInt(dbResponse.rows[0].RecyclingCompanyCount, 10);
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

  async findByCriteria(criteria: any): Promise<RecyclingCompany[]> {
    // Construye la consulta SQL dinámicamente basada en los criterios proporcionados
    const query = `
      SELECT *
      FROM ${DB_TABLE}
      WHERE ${Object.keys(criteria).map((key, index) => `${key} = $${index + 1}`).join(' AND ')}
    `;

    // Ejecuta la consulta SQL con los valores de los criterios (buscar por recycledMaterials)
    const result = await this.db.query(query, Object.values(criteria));

    // Retorna el resultado de la consulta
    return result.rows;
  }
}
