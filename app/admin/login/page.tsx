'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Implement actual authentication
      // For now, simple check (REPLACE WITH NEXTAUTH IN PRODUCTION)
      if (username === 'admin' && password === 'admin') {
        // Set session/cookie
        localStorage.setItem('admin_auth', 'true');
        router.push('/admin');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center container-padding">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-text mb-2">Admin Login</h1>
            <p className="text-text-muted">Sign in to access the admin panel</p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-text mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-text focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-text focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-500/10 border border-red-500 rounded-md text-red-500 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>

          <p className="text-center text-text-muted text-sm mt-6">
            Protected route. Authorized access only.
          </p>
        </div>
      </div>
    </div>
  );
}
