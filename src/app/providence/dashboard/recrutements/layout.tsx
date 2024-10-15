import type { PropsWithChildren } from 'react';
import { RecruitmentNavigation } from '@/core/components/layouts/recruitment-navigation';

export default function RecruitmentLayout({ children }: PropsWithChildren) {
  return (
    <div className="space-y-8">
      <RecruitmentNavigation />

      {children}
    </div>
  );
}
