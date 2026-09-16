'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminHeader({ title }: { title: string }) {
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="font-bold text-gray-900">Company · Nexa</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener" className="text-sm text-gray-500 hover:text-[#1E4DB7]">View site ↗</a>
          <Button variant="ghost" size="sm" onClick={logout} className="text-gray-600">
            <LogOut className="h-4 w-4 mr-1.5" /> Log out
          </Button>
        </div>
      </div>
    </header>
  );
}
