import { ActiveLink } from '@/core/components/active-link';
import { navigation } from '@/configs/constants/url';

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigation.map(({ name, href }) => (
          <li key={name}>
            <ActiveLink href={href}>
              <a className="hover:text-[#0581B2] text-lg">{name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
