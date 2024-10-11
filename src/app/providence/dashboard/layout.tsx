import type { PropsWithChildren } from 'react';
import { getServerAuthSession } from '@/configs/server/auth';
import { Aside } from '@/app/providence/dashboard/_components/aside';
import { ROLE } from '@/configs/constants/roles';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  if (session?.user.role !== ROLE.ADMIN) {
    return <div className="h-[calc(100vh-225px)] w-full flex justify-center items-center">Unauthorized</div>;
  }

  return (
    <div className="flex mx-auto max-w-7xl p-6 lg:px-8 space-x-4">
      <Aside />
      <div className="pl-36 min-h-[calc(100vh-317px)]">{children}</div>
    </div>
  );
}
