import { recruitmentNavigation } from '@/configs/constants/url';
import { ActiveLink } from '@/core/components/active-link';

export const RecruitmentNavigation = () => {
  return (
    <nav className="flex space-x-4">
      {recruitmentNavigation.map(({ name, href }) => (
        <ActiveLink key={name} href={href}>
          <a className="underline hover:text-[#0581B2]">{name}</a>
        </ActiveLink>
      ))}
    </nav>
  );
};
