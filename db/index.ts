import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Create connection
const sql = neon(process.env.DATABASE_URL!);

// Export drizzle instance
export const db = drizzle(sql, { schema });

// Export types
export type Workflow = typeof schema.workflows.$inferSelect;
export type NewWorkflow = typeof schema.workflows.$inferInsert;
export type Subscription = typeof schema.subscriptions.$inferSelect;
export type NewSubscription = typeof schema.subscriptions.$inferInsert;
export type AdminUser = typeof schema.adminUsers.$inferSelect;
