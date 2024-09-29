'use client';

import { Button } from '@/core/components/ui/button';
import { signIn, signOut } from 'next-auth/react';
import { URL } from '@/configs/constants/url';
import type { Session } from 'next-auth';

type Props = {
  session: Session | null;
};

export const BattlenetButton = ({ session }: Props) => {
  return !session ? (
    <Button className={'bg-[#0581B2]'} onClick={async () => await signIn('battlenet', { callbackUrl: URL.HOME })}>
      Connect with Battle.net
    </Button>
  ) : (
    <div className={'flex items-center gap-4'}>
      <p>{session.user.name}</p>
      <Button className={'text-red-500'} onClick={async () => await signOut()}>
        Logout
      </Button>
    </div>
  );
};
