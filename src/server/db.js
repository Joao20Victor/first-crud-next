import postgres from 'postgres'

const connectionString = process.env.DATABASE_PASSS
const sql = postgres(connectionString)

export default sql