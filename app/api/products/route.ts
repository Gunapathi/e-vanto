import fs from 'fs/promises';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await fs.readFile(process.cwd() + '/utils/json/productList.json', 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
