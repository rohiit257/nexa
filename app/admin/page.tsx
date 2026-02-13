'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, FileText, CreditCard } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalWorkflows: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
  });

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem('admin_auth');
    if (!isAuth) {
      router.push('/admin/login');
      return;
    }

    // Fetch stats (mock data for now)
    setStats({
      totalWorkflows: 12,
      activeSubscriptions: 47,
      monthlyRevenue: 15680,
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">Nexa Admin</div>
            <button
              onClick={() => {
                localStorage.removeItem('admin_auth');
                router.push('/admin/login');
              }}
              className="text-text-muted hover:text-text transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto container-padding py-12">
        <h1 className="text-4xl font-bold text-text mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface border border-border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="text-primary" size={24} />
              <span className="text-text-muted">Total Workflows</span>
            </div>
            <div className="text-4xl font-bold text-text">{stats.totalWorkflows}</div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard className="text-primary" size={24} />
              <span className="text-text-muted">Active Subscriptions</span>
            </div>
            <div className="text-4xl font-bold text-text">{stats.activeSubscriptions}</div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-text-muted">Monthly Revenue</span>
            </div>
            <div className="text-4xl font-bold text-text">${stats.monthlyRevenue.toLocaleString()}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/workflows"
              className="flex items-center space-x-4 bg-surface border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <FileText size={32} className="text-primary" />
              <div>
                <div className="font-semibold text-text mb-1">Manage Workflows</div>
                <div className="text-sm text-text-muted">Create, edit, or delete workflows</div>
              </div>
            </Link>

            <Link
              href="/admin/workflows/new"
              className="flex items-center space-x-4 bg-primary/10 border border-primary rounded-lg p-6 hover:bg-primary/20 transition-colors"
            >
              <Plus size={32} className="text-primary" />
              <div>
                <div className="font-semibold text-text mb-1">Add New Workflow</div>
                <div className="text-sm text-text-muted">Create a new automation workflow</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
