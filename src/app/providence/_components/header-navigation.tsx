import { ActiveLink } from '@/core/components/active-link';
import { navigation } from '@/configs/constants/url';
import { getServerAuthSession } from '@/configs/server/auth';
import { ROLE } from '@/configs/constants/roles';

export const HeaderNavigation = async () => {
  const session = await getServerAuthSession();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigation.map(({ name, href }) => {
          if (name === 'Dashboard' && session?.user.role !== ROLE.ADMIN) {
            return null;
          }
          return (
            <li key={name}>
              <ActiveLink href={href}>
                <a className="hover:text-[#0581B2] text-lg">{name}</a>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
