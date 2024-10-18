import type { PropsWithChildren } from 'react';
import { getServerAuthSession } from '@/configs/server/auth';
import { DashboardAside } from '@/core/components/layouts/dashboard-aside';
import { ROLE } from '@/configs/constants/roles';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  if (session?.user.role !== ROLE.ADMIN) {
    return <div className="h-[calc(100vh-225px)] w-full flex justify-center items-center">Unauthorized</div>;
  }

  return (
    <div className="flex mx-auto max-w-7xl p-6 lg:px-8 space-x-4">
      <DashboardAside />
      <div className="pl-36 min-h-[calc(100vh-317px)] min-w-full">{children}</div>
    </div>
  );
}
