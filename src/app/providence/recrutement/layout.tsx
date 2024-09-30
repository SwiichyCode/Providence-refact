import type { PropsWithChildren } from 'react';

export default function RecrutementLayout({ children }: PropsWithChildren) {
  return <div className={'h-auto max-w-screen-xl m-auto'}>{children}</div>;
}
