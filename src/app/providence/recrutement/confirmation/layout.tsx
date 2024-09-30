import type { PropsWithChildren } from 'react';

export default function RecrutementConfirmationLayout({ children }: PropsWithChildren) {
  return <div className={'h-[calc(100vh-286px)] max-w-screen-xl m-auto'}>{children}</div>;
}
