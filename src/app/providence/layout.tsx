import { Footer } from '@/core/components/layouts/footer';
import { Header } from '@/core/components/layouts/header';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full bg-[#13161F] text-[#F2EFE5]">
      <Header />
      <main className="space-y-12">{children}</main>
      <Footer />
    </div>
  );
}
