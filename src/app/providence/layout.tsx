import type { PropsWithChildren } from 'react';
import { Header } from '@/app/providence/_components/header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={'w-full bg-[#13161F] text-[#F2EFE5]'}>
      <Header />
      <main className="space-y-12">{children}</main>
    </div>
  );
}
