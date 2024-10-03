import { BattlenetButton } from '@/core/components/battlenet-button';
import { getServerAuthSession } from '@/configs/server/auth';

export const HeaderAuthentication = async () => {
  const session = await getServerAuthSession();

  return (
    <nav>
      <BattlenetButton session={session} />
    </nav>
  );
};
