import Link from 'next/link';
import { URL } from '@/configs/constants/url';
import { HeaderLogo } from '@/core/components/layouts/header-logo';
import { HeaderMobile } from '@/core/components/layouts/header-mobile';
import { HeaderAuthentication } from '@/core/components/layouts/header-authentication';
import { HeaderHamburger } from '@/core/components/layouts/header-hamburger';
import { HeaderNavigation } from '@/core/components/layouts/header-navigation';

export const Header = async () => {
  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={URL.HOME} className="-m-1.5 p-1.5">
            <HeaderLogo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <HeaderHamburger />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <HeaderNavigation />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HeaderAuthentication />
        </div>
      </nav>
      <HeaderMobile />
    </header>
  );
};
