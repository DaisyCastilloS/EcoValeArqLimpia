import { RecyclingCompany } from '../domain/entity/CompanyInterface';
import { RecyclingCompanyServiceInterface } from './interfaces/CompanyServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'RecyclingCompany';
export default class PGDataSourceServiceRecyclingCompany implements RecyclingCompanyServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(RecyclingCompany: RecyclingCompany): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,nombreempresa,rubro,direccion,emailempresa,password,horario_atencion,vouchers,recycledMaterials,recyclingPoints,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`, [RecyclingCompany.id, RecyclingCompany.nombreempresa, RecyclingCompany.rubro, RecyclingCompany.direccion, RecyclingCompany.emailempresa, RecyclingCompany.password, RecyclingCompany.horario_atencion, RecyclingCompany.vouchers, RecyclingCompany.recycledMaterials, RecyclingCompany.recyclingPoints,RecyclingCompany.createdAt,RecyclingCompany.updatedAt]);
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

  async findByName(nombreempresa: string): Promise<RecyclingCompany[] | []> {
    const dbResponse = await this.db.query(`SELECT nombreempresa FROM ${DB_TABLE} WHERE nombreempresa = $1 LIMIT 4;`, [nombreempresa]);
    const result = dbResponse.rows.map((RecyclingCompany) => RecyclingCompany.nombreempresa);
    return result;
  }

  // como es RecyclingCompany, peude actualizar cualqiera de los campos
  async updateById(id: string, updatedFields: Partial<RecyclingCompany>): Promise<any> {
    const updateList = Object.entries(updatedFields).map(([key, _], index) => `${key} = $${index + 2}`).join(", ");
    const dbResponse = await this.db.query(
      `UPDATE ${DB_TABLE} 
       SET ${updateList}, updatedAt = CURRENT_TIMESTAMP 
       WHERE id = $1;`,
      [id, ...Object.values(updatedFields)]
    );
    return dbResponse;
  }

  async deleteById(id: string): Promise<void> {
await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id]
    );
  }

  // si el tipo RecyclingCompany puede acceder a todos los campos pero quiero devolver solo nombre, apellido y email
  async getAll(): Promise<RecyclingCompany[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`
    );
    return dbResponse.rows;
  }

  //numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS RecyclingCompanyCount FROM ${DB_TABLE} WHERE isRecyclingCompany = true;`
    );
    return parseInt(dbResponse.rows[0].RecyclingCompanyCount);
  }

  async findPaginated(options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ RecyclingCompanys: RecyclingCompany[]; total: number }> {
    const { page, pageSize, sortBy = 'id', sortOrder = 'asc' } = options;
    const offset = (page - 1) * pageSize;
  
    const dbResponse = await this.db.query(
      `SELECT id, isRecyclingCompany, nombre, apellido, email, password, roles, createdAt, updatedAt, empresas 
       FROM ${DB_TABLE}
       ORDER BY ${sortBy} ${sortOrder}
       LIMIT $1 OFFSET $2;`,
      [pageSize, offset]
    );
  
    const totalResponse = await this.db.query(`SELECT COUNT(*) AS total FROM ${DB_TABLE};`);
    const total = parseInt(totalResponse.rows[0].total);
  
    const RecyclingCompanys = dbResponse.rows.map((RecyclingCompany) => ({
      id: RecyclingCompany.id,
      isRecyclingCompany: RecyclingCompany.isRecyclingCompany,
      nombre: RecyclingCompany.nombre,
      apellido: RecyclingCompany.apellido,
      email: RecyclingCompany.email,
      password: RecyclingCompany.password,
      roles: RecyclingCompany.roles,
      createdAt: RecyclingCompany.createdAt.toISOString(),
      updatedAt: RecyclingCompany.updatedAt.toISOString(),
      empresas: RecyclingCompany.empresas
    }));
  
    return { RecyclingCompanys: RecyclingCompanys, total };
  }
}
