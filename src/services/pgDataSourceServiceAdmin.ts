import { Admin } from '../domain/entity/AdminInterface';
import { AdminServiceInterface } from './interfaces/AdminService';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'Admin';
export default class PGDataSourceServiceAdmin implements AdminServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(admin: Admin): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,isAdmin,nombre,apellido,email,password,roles,createdAt,updatedAt,empresas) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`, [admin.id, admin.isAdmin, admin.nombre, admin.apellido, admin.email, admin.password, admin.roles, admin.createdAt, admin.updatedAt, admin.empresas]);
  }

  async findById(id: string): Promise<Admin | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<Admin[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(nombre: string): Promise<string[] | []> {
    const dbResponse = await this.db.query(`SELECT nombre FROM ${DB_TABLE} WHERE nombre = $1 LIMIT 4;`, [nombre]);
    const result = dbResponse.rows.map((adminRow) => adminRow.nombre);
    return result;
  }

  // como es admin, peude actualizar cualqiera de los campos
  async updateById(id: string, updatedFields: Partial<Admin>): Promise<any> {
    const updateList = Object.entries(updatedFields).map(([key], index) => `${key} = $${index + 2}`).join(', ');
    const dbResponse = await this.db.query(
      `UPDATE ${DB_TABLE} 
       SET ${updateList}, updatedAt = CURRENT_TIMESTAMP 
       WHERE id = $1;`,
      [id, ...Object.values(updatedFields)],
    );
    return dbResponse;
  }

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // si el tipo Admin acceder a todos los campos pero quiero devolver solo nombre, apellido y email
  async getAll(): Promise<Admin[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS adminCount FROM ${DB_TABLE} WHERE isAdmin = true;`,
    );
    return parseInt(dbResponse.rows[0].date, 10);
  }

  async findPaginated(options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ Admins: Admin[]; total: number }> {
    const {
      page, pageSize, sortBy = 'id', sortOrder = 'asc',
    } = options;
    const offset = (page - 1) * pageSize;

    const dbResponse = await this.db.query(
      `SELECT id, isAdmin, nombre, apellido, email, password, roles, createdAt, updatedAt, empresas 
       FROM ${DB_TABLE}
       ORDER BY ${sortBy} ${sortOrder}
       LIMIT $1 OFFSET $2;`,
      [pageSize, offset],
    );

    const totalResponse = await this.db.query(`SELECT COUNT(*) AS total FROM ${DB_TABLE};`);
    const total = parseInt(totalResponse.rows[0].date, 10);

    const admins = dbResponse.rows.map((admin) => ({
      id: admin.id,
      isAdmin: admin.isAdmin,
      nombre: admin.nombre,
      apellido: admin.apellido,
      email: admin.email,
      password: admin.password,
      roles: admin.roles,
      createdAt: admin.createdAt.toISOString(),
      updatedAt: admin.updatedAt.toISOString(),
      empresas: admin.empresas,
    }));

    return { Admins: admins, total };
  }
}
