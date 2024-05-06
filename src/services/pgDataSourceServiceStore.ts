import { Store } from '../domain/entity/StoreInterface';
import { StoreServiceInterface } from './interfaces/StoreServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'Store';
export default class PGDataSourceServiceStore implements StoreServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(store: Store): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,nombrestore,empresaId,createdAt,updatedAt) values ($1,$2,$3,$4,$5);`, [store.id, store.nombrestore, store.empresaId, store.createdAt, store.updatedAt]);
  }

  async findById(id: string): Promise<Store | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<Store[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(nombre: string): Promise<Store[] | []> {
    const dbResponse = await this.db.query(`SELECT nombre FROM ${DB_TABLE} WHERE nombre = $1 LIMIT 4;`, [nombre]);
    const result = dbResponse.rows.map((StoreRow) => StoreRow.nombre);
    return result;
  }

  // como es Store, peude actualizar cualqiera de los campos
  async updateById(id: string, updatedFields: Partial<Store>): Promise<any> {
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

  // si el tipo Store acceder a todos los campos pero quiero devolver solo nombre
  async getAll(): Promise<Store[] | undefined> {
    const dbResponse = await this.db.query(
      `SELECT nombrestore FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de admons registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS StoreCount FROM ${DB_TABLE} WHERE isStore = true;`,
    );
    return parseInt(dbResponse.rows[0].date, 10);
  }
}
