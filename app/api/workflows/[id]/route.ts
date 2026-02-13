import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { workflows } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/workflows/[id] - Get single workflow
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const workflow = await db.select().from(workflows).where(eq(workflows.id, id)).limit(1);

    if (workflow.length === 0) {
      return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
    }

    return NextResponse.json(workflow[0]);
  } catch (error) {
    console.error('Error fetching workflow:', error);
    return NextResponse.json({ error: 'Failed to fetch workflow' }, { status: 500 });
  }
}

// PUT /api/workflows/[id] - Update workflow (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Add authentication check here
    const { id } = await params;
    const body = await request.json();

    const updatedWorkflow = await db.update(workflows)
      .set({
        title: body.title,
        slug: body.slug,
        description: body.description,
        features: body.features,
        category: body.category,
        monthlyPrice: body.monthlyPrice,
        updatedAt: new Date(),
      })
      .where(eq(workflows.id, id))
      .returning();

    if (updatedWorkflow.length === 0) {
      return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
    }

    return NextResponse.json(updatedWorkflow[0]);
  } catch (error) {
    console.error('Error updating workflow:', error);
    return NextResponse.json({ error: 'Failed to update workflow' }, { status: 500 });
  }
}

// DELETE /api/workflows/[id] - Delete workflow (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Add authentication check here
    const { id } = await params;

    const deletedWorkflow = await db.delete(workflows)
      .where(eq(workflows.id, id))
      .returning();

    if (deletedWorkflow.length === 0) {
      return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Workflow deleted successfully' });
  } catch (error) {
    console.error('Error deleting workflow:', error);
    return NextResponse.json({ error: 'Failed to delete workflow' }, { status: 500 });
  }
}
