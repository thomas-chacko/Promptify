import pool from "../config/db.js";

export const executeQuery = async (sql, params = []) => {
  let connection;
  try {
    connection = await pool.getConnection(); // get connection from pool
    const [rows] = await connection.execute(sql, params);
    return rows;
  } catch (err) {
    // console.error("Query Error:", err);
    throw err;
  } finally {
    if (connection) connection.release(); // release connection back to pool
  }
};
