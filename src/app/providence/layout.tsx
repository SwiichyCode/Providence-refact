import type { PropsWithChildren } from 'react';
import { Header } from '@/app/providence/_components/header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={'w-full h-screen bg-[#13161F]'}>
      <Header />
      {children}
    </div>
  );
}
