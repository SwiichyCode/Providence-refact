import { clsx } from 'clsx';

type Props = {
  isMobile?: boolean;
};

export const HeaderLogo = ({ isMobile }: Props) => {
  return <span className={clsx('flex flex-1 mr-auto', isMobile ? 'text-2xl' : 'text-3xl')}>Providence</span>;
};
