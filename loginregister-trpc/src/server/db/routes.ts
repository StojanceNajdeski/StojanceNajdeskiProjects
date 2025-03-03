import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL! || "", { ssl: 'require' })

export async function GET() {
  try {
    const users = await sql`SELECT * FROM users`
    return Response.json({ users })
  } catch (error) {
    const err = error as Error
    return Response.json({ error: err.message }, { status: 500 })
  }
}