import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { workflows } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/workflows - Get all workflows
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let query = db.select().from(workflows);
    
    if (category && category !== 'All') {
      query = query.where(eq(workflows.category, category)) as any;
    }

    const allWorkflows = await query;

    return NextResponse.json(allWorkflows);
  } catch (error) {
    console.error('Error fetching workflows:', error);
    return NextResponse.json({ error: 'Failed to fetch workflows' }, { status: 500 });
  }
}

// POST /api/workflows - Create new workflow (admin only)
export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check here
    const body = await request.json();

    const newWorkflow = await db.insert(workflows).values({
      title: body.title,
      slug: body.slug,
      description: body.description,
      features: body.features,
      category: body.category,
      monthlyPrice: body.monthlyPrice,
    }).returning();

    return NextResponse.json(newWorkflow[0], { status: 201 });
  } catch (error) {
    console.error('Error creating workflow:', error);
    return NextResponse.json({ error: 'Failed to create workflow' }, { status: 500 });
  }
}
