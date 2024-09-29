import { HeaderLogo } from '@/app/providence/_components/header-logo';
import { HeaderNavigation } from '@/app/providence/_components/header-navigation';
import { HeaderAuthentication } from '@/app/providence/_components/header-authentication';

export const Header = () => {
  return (
    <header className={'flex w-screen py-8 px-12 border-b border-[#21242F]'}>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderAuthentication />
    </header>
  );
};
