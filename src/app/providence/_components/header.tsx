import { Bars3Icon } from '@heroicons/react/24/outline';
import { URL } from '@/configs/constants/url';
import { HeaderLogo } from '@/app/providence/_components/header-logo';
import { HeaderMobile } from '@/app/providence/_components/header-mobile';
import { ActiveLink } from '@/core/components/active-link';
import { HeaderAuthentication } from '@/app/providence/_components/header-authentication';
import HeaderHamburger from '@/app/providence/_components/header-hamburger';
import Link from 'next/link';

const navigation = [
  { name: 'Presentation', href: URL.HOME },
  /*{ name: 'Roster', href: URL.ROSTER },*/
  { name: 'Postuler', href: URL.RECRUTEMENT },
  /*{ name: 'Dashboard', href: URL.DASHBOARD },*/
];

export const Header = () => {
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
          {navigation.map((item) => (
            <ActiveLink href={item.href} key={item.name}>
              <a className="hover:text-[#0581B2] text-lg">{item.name}</a>
            </ActiveLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HeaderAuthentication />
        </div>
      </nav>
      <HeaderMobile />
    </header>
  );
};
