import postgres from 'postgres'


 const connectionString = process.env.DATABASE_PASS
const sql = postgres(connectionString)

export default sql