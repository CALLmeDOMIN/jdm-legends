import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
 
  try {
    await sql`INSERT INTO Products (Name, Price, Description, Image, Type, Quantity) VALUES ('Dog', 100, 'A dog', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', 'Dog', 1);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const products = await sql`SELECT * FROM Products;`;
  return NextResponse.json({ products }, { status: 200 });
}