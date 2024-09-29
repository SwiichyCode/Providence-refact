import { HeaderLogo } from '@/app/providence/_components/header-logo';
import { HeaderNavigation } from '@/app/providence/_components/header-navigation';
import { HeaderAuthentication } from '@/app/providence/_components/header-authentication';

export const Header = async () => {
  return (
    <header className="flex justify-center w-full py-8 px-12 border-b border-[#21242F]">
      <div className="flex w-full justify-between items-center max-w-screen-xl">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderAuthentication />
      </div>
    </header>
  );
};
