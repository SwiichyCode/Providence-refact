'use client';

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useHeaderMobileStore } from '@/core/stores/header-mobile-store';

export const HeaderHamburger = () => {
  const { toggle } = useHeaderMobileStore();

  return (
    <button
      type="button"
      onClick={() => toggle()}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
    </button>
  );
};
