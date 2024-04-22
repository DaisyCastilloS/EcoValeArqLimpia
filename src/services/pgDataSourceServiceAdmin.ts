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
    const dbResponse = await this.db.query(`insert into ${DB_TABLE} (id,isAdmin,nombre,apellido,email,password,roles,createdAt,updatedAt,empresas) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }
}
