import { BattlenetButton } from '@/core/components/battlenet-button';
import { getServerAuthSession } from '@/configs/server/auth';

export const HeaderAuthentication = async () => {
  const session = await getServerAuthSession();

  return (
    <nav className="flex items-center gap-4">
      <BattlenetButton session={session} />
    </nav>
  );
};
