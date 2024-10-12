import { db } from '@/configs/server/db';
import { RecruitmentDescription } from '@/core/components/recruitment-description';
import RecruitmentForm from '@/core/forms/recruitment-form';

export const revalidate = 60;

export default async function RecruitmentPage() {
  const recruitmentPriority = await db.recruitmentPriority.findFirst();

  return (
    <div className="py-20 sm:py-28 mx-auto max-w-7xl px-6 lg:px-8">
      <RecruitmentDescription recruitmentPriority={recruitmentPriority?.recruitmentPriority} />
      <RecruitmentForm />
    </div>
  );
}
