import { Role } from '../domain/entity/RoleInterface';
import { RoleServiceInterface } from './interfaces/RoleServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'Role';
export default class PGDataSourceServiceRole implements RoleServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(role: Role): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,name) values ($1,$2);`, [role.id, role.name]);
  }

  async findById(id: string): Promise<Role | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<Role[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(name: string): Promise<Role[] | []> {
    const dbResponse = await this.db.query(`SELECT name FROM ${DB_TABLE} WHERE name = $1 LIMIT 4;`, [name]);
    const result = dbResponse.rows.map((RoleRow) => RoleRow.name);
    return result;
  }

  // como es Role, peude actualizar cualqiera de los campos
  async updateById(id: string): Promise<any> {
    const dbResponse = await this.db.query(
      `UPDATE ${DB_TABLE} 
         SET updatedAt = CURRENT_TIMESTAMP 
         WHERE id = $1;`,
      [id],
    );
    return dbResponse;
  }

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // si el tipo Role acceder a todos los campos pero quiero devolver solo name
  async getAll(): Promise<Role[] | undefined> {
    const dbResponse = await this.db.query(
      `SELECT name FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS RoleCount FROM ${DB_TABLE} WHERE isRole = true;`,
    );
    return parseInt(dbResponse.rows[0].date, 10);
  }
}
