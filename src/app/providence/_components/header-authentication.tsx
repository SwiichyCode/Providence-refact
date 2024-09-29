import { BattlenetButton } from '@/core/components/battlenet-button';
import { getServerAuthSession } from '@/configs/server/auth';

export const HeaderAuthentication = async () => {
  const session = await getServerAuthSession();

  return (
    <div className={'flex items-center justify-center flex-1 ml-auto'}>
      <BattlenetButton session={session} />
    </div>
  );
};
