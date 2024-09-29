import { ActiveLink } from '@/core/components/active-link';
import { URL } from '@/configs/constants/url';

const navigationItems = [
  { name: 'Presentation', href: URL.HOME },
  /*{ name: 'Roster', href: URL.ROSTER },
  { name: 'Postuler', href: URL.RECRUTEMENT },
  { name: 'Dashboard', href: URL.DASHBOARD },*/
];

export const HeaderNavigation = () => {
  return (
    <nav className={'w-full flex justify-center'}>
      <ul className={'flex gap-8 text-xl pt-2'}>
        {navigationItems.map(({ name, href }) => (
          <li key={name}>
            <ActiveLink href={href}>
              <a className={'hover:text-[#0581B2]'}>{name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
