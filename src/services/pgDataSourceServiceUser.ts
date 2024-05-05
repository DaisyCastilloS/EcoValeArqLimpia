import { User } from '../domain/entity/UserInterface';
import { UserServiceInterface } from './interfaces/UserServices';
import { SQLDatabaseWrapperInterface } from './interfaces/SQLDatabaseWrapper';

const DB_TABLE = 'User';
export default class PGDataSrcServiceUser implements UserServiceInterface {
  db: SQLDatabaseWrapperInterface;

  constructor(db: SQLDatabaseWrapperInterface) {
    this.db = db;
  }

  async save(user: User): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (id,nombre,apellido,email,password,roles,ubicacion,historial_reciclaje,puntosAcumulados,vouchers,beneficiosObtenidos,createdAt,updatedAt) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13);`, [user.id, user.nombre, user.apellido, user.email, user.password, user.roles, user.ubicacion, user.historial_reciclaje, user.puntosAcumulados, user.vouchers, user.beneficiosObtenidos, user.createdAt, user.updatedAt]);
  }

  async findById(id: string): Promise<User | undefined> {
    const dbResponse = await this.db.query(`SELECT id FROM ${DB_TABLE} WHERE id = $1 LIMIT 1;`, [id]);
    const result = dbResponse.rows[0];

    return result;
  }

  async findByDate(date: string): Promise<User[] | []> {
    const dbResponse = await this.db.query(`SELECT extract(year from createdAt)||'-'||extract(month from createdAt)||'-'||extract(day from createdAt) as date 
  FROM ${DB_TABLE} WHERE createdAt = $1 LIMIT 1;`, [date]);
    const result = dbResponse.rows[0].date;
    return result;
  }

  async findByName(nombre: string): Promise<string[] | []> {
    const dbResponse = await this.db.query(`SELECT nombre FROM ${DB_TABLE} WHERE nombre = $1 LIMIT 4;`, [nombre]);
    const result = dbResponse.rows.map((companyRow) => companyRow.nombre);
    return result;
  }

  // user actualizar email y password
  async updateById(id: string, updatedFields: Partial<User>): Promise<void> {
    const { email, password } = updatedFields;

    // Ejecuta la consulta SQL de actualización
    await this.db.query(
      `
      UPDATE ${DB_TABLE} 
      SET email = $1, password = $2, updatedAt = CURRENT_TIMESTAMP 
      WHERE id = $3
      `,
      [email, password, id],
    );
  }

  async deleteById(id: string): Promise<void> {
    await this.db.query(
      `DELETE FROM ${DB_TABLE} WHERE id = $1;`,
      [id],
    );
  }

  // el tipo User accede a todos los campos quiero devolver solo nombre, apellido, email
  async getAll(): Promise<User[] | []> {
    const dbResponse = await this.db.query(
      `SELECT nombre, apellido, email FROM ${DB_TABLE};`,
    );
    return dbResponse.rows;
  }

  // numero de empresas registrados
  async getCount(): Promise<number> {
    const dbResponse = await this.db.query(
      `SELECT COUNT(*) AS UserCount FROM ${DB_TABLE} WHERE isUser = true;`,
    );
    return parseInt(dbResponse.rows[0].UserCount, 10);
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

  async findByCriteria(criteria: any): Promise<User[]> {
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
