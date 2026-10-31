'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase, signOut } from '@/lib/supabase';
import { BRAND, ROUTES } from '@/lib/constants';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (!user || error) {
        router.push(`${ROUTES.admin}/login`);
      } else {
        setUser(user);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await signOut();
    router.push(ROUTES.home);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const navItems = [
    { href: ROUTES.admin, label: '📊 Dashboard', icon: '📊' },
    { href: `${ROUTES.admin}/tours`, label: '✈️ Manage Tours', icon: '✈️' },
    { href: `${ROUTES.admin}/bookings`, label: '📋 Bookings', icon: '📋' },
    { href: `${ROUTES.admin}/settings`, label: '⚙️ Settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} gradient-navy-blue text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="logo-card w-12 h-12">
              <Image
                src="/images/logos/biahes-logo.png"
                alt="Biahes"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="font-bold text-lg">{BRAND.name}</h1>
                <p className="text-xs text-biahes-gold">Admin</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              title={sidebarOpen ? '' : item.label}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-semibold">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-white/10 space-y-3">
          {sidebarOpen && (
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xs text-biahes-gold">Logged in as:</p>
              <p className="text-sm font-semibold truncate">{user.email}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full bg-biahes-red hover:bg-biahes-deep-red text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>

        {/* Toggle Sidebar */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full text-center hover:bg-white/10 py-2 rounded transition-colors"
            title={sidebarOpen ? 'Collapse' : 'Expand'}
          >
            {sidebarOpen ? '◄' : '►'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-biahes-navy">Admin Dashboard</h2>
          <div className="text-sm text-gray-600">
            Welcome back, <strong>{user.email?.split('@')[0]}</strong>! 👋
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
