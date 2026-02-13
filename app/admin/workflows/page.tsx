'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Workflow {
  id: string;
  title: string;
  category: string;
  monthlyPrice: string;
  createdAt: Date;
}

export default function AdminWorkflowsPage() {
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem('admin_auth');
    if (!isAuth) {
      router.push('/admin/login');
      return;
    }

    // Fetch workflows (mock data for now)
    setWorkflows([
      {
        id: '1',
        title: 'E-commerce Lead Capture Bot',
        category: 'E-commerce',
        monthlyPrice: '299',
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Agency Client Onboarding System',
        category: 'Agency',
        monthlyPrice: '499',
        createdAt: new Date(),
      },
    ]);
    setLoading(false);
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this workflow?')) return;

    try {
      // TODO: Implement actual delete
      setWorkflows(workflows.filter((w) => w.id !== id));
    } catch (error) {
      console.error('Error deleting workflow:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin" className="text-2xl font-bold text-primary">
              Nexa Admin
            </Link>
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-text">Manage Workflows</h1>
          <Link
            href="/admin/workflows/new"
            className="flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            <Plus size={20} />
            <span>Add New Workflow</span>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-text-muted">Loading...</div>
        ) : (
          <div className="bg-surface border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-background">
                <tr>
                  <th className="text-left px-6 py-4 text-text font-semibold">Title</th>
                  <th className="text-left px-6 py-4 text-text font-semibold">Category</th>
                  <th className="text-left px-6 py-4 text-text font-semibold">Price</th>
                  <th className="text-right px-6 py-4 text-text font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map((workflow) => (
                  <tr key={workflow.id} className="border-t border-border">
                    <td className="px-6 py-4 text-text">{workflow.title}</td>
                    <td className="px-6 py-4 text-text-muted">{workflow.category}</td>
                    <td className="px-6 py-4 text-text">${workflow.monthlyPrice}/mo</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/admin/workflows/${workflow.id}/edit`}
                          className="p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(workflow.id)}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {workflows.length === 0 && (
              <div className="text-center py-12 text-text-muted">
                No workflows found. Create your first one!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
