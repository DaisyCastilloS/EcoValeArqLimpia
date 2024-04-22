


//el usuario a través de la id del toen, podrá actualizar email y password
async updateById(id: string,newEmail:string,newPassword:string): Promise<void> {
    const dbResponse =await this.db.query(`
    UPDATE ${DB_TABLE}
    SET email = $1, password = $2
    WHERE id = $3;
  `, [id,newEmail,newPassword]);
    const result = dbResponse.rows[0];

    return result;
  }
}