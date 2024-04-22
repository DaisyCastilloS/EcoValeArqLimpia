import { Admin } from '../domain/entity/AdminInterface';
import { AdminServiceInterface } from './interfaces/AdminService';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'Admin';
export default class PGDataSourceServiceAdmin implements AdminServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(Admin: Admin): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,isAdmin,nombre,apellido,email,password,roles,createdAt,updatedAt,empresas) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`, [Admin.id, Admin.isAdmin, Admin.nombre, Admin.apellido, Admin.email, Admin.password, Admin.roles, Admin.createdAt, Admin.updatedAt, Admin.empresas]);
  }

  async findById(id: string): Promise<Admin | undefined> {
    const dbResponse = await this.db.query(`select id, isAdmin, nombre, apellido, email, password, roles,createdAt,updatedAt,empresas from ${DB_TABLE} where id = $1 limit 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<Admin[] | []> {
    const dbResponse = await this.db.query(`select id, isAdmin, nombre, apellido, email, password, roles,createdAt,updatedAt,empresas,extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date from ${DB_TABLE} where createdAt = $1 limit 1;`, [date]);
    const result = dbResponse.rows.map((Admin) => ({
      id: Admin.id,
      isAdmin: Admin.isAdmin,
      nombre: Admin.nombre,
      apellido: Admin.apellido,
      email: Admin.email,
      password: Admin.password,
      roles: Admin.roles,
      createdAt: Admin.createdAt,
      updatedAt: Admin.updatedAt,
      empresas: Admin.empresas,
    }));
    return result;
  }

  async findByName(nombre: string): Promise<Admin[] | []> {
    const dbResponse = await this.db.query(`select id, isAdmin, nombre, apellido, email, password, roles,createdAt,updatedAt,empresas from ${DB_TABLE} where nombre = $1 limit 4;`, [nombre]);
    const result = dbResponse.rows.map((Admin) => ({
      id: Admin.id,
      isAdmin: Admin.isAdmin,
      nombre: Admin.nombre,
      apellido: Admin.apellido,
      email: Admin.email,
      password: Admin.password,
      roles: Admin.roles,
      createdAt: Admin.createdAt,
      updatedAt: Admin.updatedAt,
      empresas: Admin.empresas,
    }));
    return result;
  }

  // arreglarlo
  async updateById(id: string): Promise<void> {
    const dbResponse = await this.db.query(`update ${DB_TABLE} (id,isAdmin,nombre,apellido,email,password,roles,createdAt,updatedAt,empresas) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async deleteById(id: string): Promise<void> {
    try {
      const deleteQuery = `
            DELETE FROM ${DB_TABLE}
            WHERE id = $1;
        `;

      await this.db.query(deleteQuery, [id]);
      console.log(`Administrador con ID ${id} eliminado correctamente.`);
    } catch (error) {
      console.error(`Error al eliminar el administrador con ID ${id}:`, error);
      throw error; // Propaga el error hacia arriba si es necesario
    }
  }

  // modificarla para obtener solo campo nobre apellido y email
  async getAll(): Promise<Admin[] | []> {
    const dbResponse = await this.db.query(
      `SELECT id, isAdmin, nombre, apellido, email, password, roles, createdAt, updatedAt, empresas 
     FROM ${DB_TABLE};`,
    );
    const admins = dbResponse.rows.map((admin) => ({
      ...admin,
      createdAt: admin.createdAt.toISOString(), // Formatear la fecha si es necesario
      updatedAt: admin.updatedAt.toISOString(),
    }));
    return admins;
  }

  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) 
     FROM ${DB_TABLE};`,
    );
    const count = parseInt(dbResponse.rows[0].count, 10);
    return count;
  }

  async existsById(id: string): Promise<boolean> {
    const dbResponse = await this.db.query(
      `SELECT EXISTS(SELECT 1 FROM ${DB_TABLE} WHERE id = $1) as "exists";`,
      [id],
    );
    const { exists } = dbResponse.rows[0];
    return exists;
  }

  async findByCriteria(criteria: any): Promise<Admin[]> {
    const { conditions, params } = this.buildQueryConditions(criteria);

    const query = `
    SELECT id, isAdmin, nombre, apellido, email, password, roles, createdAt, updatedAt, empresas 
    FROM ${DB_TABLE}
    WHERE ${conditions};
  `;

    const dbResponse = await this.db.query(query, params);
    const result = dbResponse.rows;
    return result;
  }

  async findPaginated(options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ Admins: Admin[]; total: number }> {
    const {
      page, pageSize, sortBy, sortOrder,
    } = options;
    const offset = (page - 1) * pageSize;

    let orderByClause = '';
    if (sortBy && (sortOrder === 'asc' || sortOrder === 'desc')) {
      orderByClause = `ORDER BY ${sortBy} ${sortOrder.toUpperCase()}`;
    }

    const countQuery = `
    SELECT COUNT(*) AS total
    FROM ${DB_TABLE};
  `;

    const dataQuery = `
    SELECT id, isAdmin, nombre, apellido, email, password, roles, createdAt, updatedAt, empresas
    FROM ${DB_TABLE}
    ${orderByClause}
    LIMIT ${pageSize}
    OFFSET ${offset};
  `;

    const countResponse = await this.db.query(countQuery);
    const total = parseInt(countResponse.rows[0].total, 10);

    const dataResponse = await this.db.query(dataQuery);
    const admins = dataResponse.rows;

    return {
      Admins: admins,
      total,
    };
  }

  private buildQueryConditions(criteria: any): { conditions: string; params: any[] } {
    const conditions = [];
    const params = [];

    // Construir condiciones dinámicas
    for (const key in criteria) {
      if (criteria.hasOwnProperty(key)) {
        conditions.push(`${key} = $${params.length + 1}`);
        params.push(criteria[key]);
      }
    }

    return {
      conditions: conditions.join(' AND '),
      params,
    };
  }
}
