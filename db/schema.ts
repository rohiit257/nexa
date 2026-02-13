import { pgTable, uuid, text, timestamp, decimal, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const subscriptionStatusEnum = pgEnum('subscription_status', [
  'active',
  'cancelled',
  'paused',
]);

// Tables
export const workflows = pgTable('workflows', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description').notNull(),
  features: text('features').array().notNull(),
  category: text('category').notNull(),
  monthlyPrice: decimal('monthly_price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userEmail: text('user_email').notNull(),
  workflowId: uuid('workflow_id').notNull().references(() => workflows.id),
  status: subscriptionStatusEnum('status').notNull().default('active'),
  paymentId: text('payment_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  endsAt: timestamp('ends_at'),
});

export const adminUsers = pgTable('admin_users', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const workflowsRelations = relations(workflows, ({ many }) => ({
  subscriptions: many(subscriptions),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  workflow: one(workflows, {
    fields: [subscriptions.workflowId],
    references: [workflows.id],
  }),
}));
