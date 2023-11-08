import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Products ( ID SERIAL PRIMARY KEY, Name VARCHAR(255) NOT NULL, Price INT NOT NULL, Description TEXT NOT NULL, Image TEXT NOT NULL, Type VARCHAR(255) NOT NULL, Quantity INT NOT NULL );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}