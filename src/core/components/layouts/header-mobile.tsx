'use client';

import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { URL } from '@/configs/constants/url';
import { useHeaderMobileStore } from '@/core/stores/header-mobile-store';
import { HeaderLogo } from '@/core/components/layouts/header-logo';
import { ActiveLink } from '@/core/components/active-link';
import { navigation } from '@/configs/constants/url';

export const HeaderMobile = () => {
  const { isOpen, toggle } = useHeaderMobileStore();

  return (
    <Dialog open={isOpen} onClose={() => toggle()} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#13161F] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white">
        <div className="flex items-center justify-between">
          <Link href={URL.HOME} className="-m-1.5 p-1.5">
            <HeaderLogo isMobile />
          </Link>
          <button type="button" onClick={() => toggle()} className="-m-2.5 rounded-md p-2.5">
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <ActiveLink href={item.href} key={item.name}>
                  <a
                    onClick={() => toggle()}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {item.name}
                  </a>
                </ActiveLink>
              ))}
            </div>
            <div className="py-6">
              <Link
                href={URL.LOGIN}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                onClick={() => toggle()}
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
