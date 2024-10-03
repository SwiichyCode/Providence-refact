import { ActiveLink } from '@/core/components/active-link';
import { navigation } from '@/configs/constants/url';

export const HeaderNavigation = () => {
  return (
    <nav className="w-full flex justify-center">
      <ul className="flex gap-8 text-xl pt-2">
        {navigation.map(({ name, href }) => (
          <li key={name}>
            <ActiveLink href={href}>
              <a className="hover:text-[#0581B2]">{name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
