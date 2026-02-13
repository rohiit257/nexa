export interface Workflow {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  category: string;
  monthlyPrice: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SubscriptionStatus = 'active' | 'cancelled' | 'paused';

export interface Subscription {
  id: string;
  userEmail: string;
  workflowId: string;
  status: SubscriptionStatus;
  paymentId: string | null;
  createdAt: Date;
  endsAt: Date | null;
}

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  createdAt: Date;
}

export interface ProductCardProps {
  workflow: Workflow;
}

export interface SubscribeButtonProps {
  workflowId: string;
  workflowTitle: string;
  monthlyPrice: string;
}
