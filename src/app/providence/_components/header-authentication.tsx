import { BattlenetButton } from '@/core/components/battlenet-button';
import { getServerAuthSession } from '@/configs/server/auth';
import { ProfileLink } from '@/app/providence/_components/profile-link';

export const HeaderAuthentication = async () => {
  const session = await getServerAuthSession();

  return (
    <nav className="flex items-center gap-4">
      <ProfileLink session={session} />
      <BattlenetButton session={session} />
    </nav>
  );
};
