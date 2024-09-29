'use client';

import Link from 'next/link';
import React, { Children } from 'react';
import { usePathname } from 'next/navigation';

export type ActiveLinkProps = {
  children: React.ReactNode;
  activeClassName?: string;
} & React.ComponentProps<typeof Link>;

export const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps) => {
  const asPath = usePathname();
  const child = Children.only(children) as React.ReactElement<{ className?: string }>;
  const childClassName = child.props.className ?? '';

  const className =
    asPath === props.href ? `${childClassName} ${activeClassName} text-[#0581B2]`.trim() : childClassName;

  return (
    <Link legacyBehavior={true} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};
