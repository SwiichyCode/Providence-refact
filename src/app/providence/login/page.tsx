import { getServerAuthSession } from '@/configs/server/auth';
import { BattlenetButton } from '@/core/components/battlenet-button';

export default async function LoginPage() {
  const session = await getServerAuthSession();

  return (
    <div className="h-[calc(100vh-225px)] w-full flex justify-center items-center">
      <BattlenetButton session={session} />
    </div>
  );
}
