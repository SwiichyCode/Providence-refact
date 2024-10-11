import { ActiveLink } from '@/core/components/active-link';
import { dashboardNavigation } from '@/configs/constants/url';

export const Aside = () => {
  return (
    <aside className="border-r border-white/10 min-h-[calc(100vh-317px)] fixed">
      <nav>
        <ul className="space-y-4 w-36">
          {dashboardNavigation.map(({ name, href }) => (
            <li key={name}>
              <ActiveLink href={href}>
                <a className="hover:text-[#0581B2] text-lg">{name}</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
