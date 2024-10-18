import type { Session } from 'next-auth';
import Link from 'next/link';
import { URL } from '@/configs/constants/url';
import { UserIcon } from '@heroicons/react/24/outline';

type Props = {
  session: Session | null;
};

export const ProfileLink = ({ session }: Props) => {
  return (
    session && (
      <Link href={URL.PROFILE}>
        <UserIcon className="h-6 w-6" />
      </Link>
    )
  );
};
