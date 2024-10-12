import { RecruitmentPriorityForm } from '@/app/providence/dashboard/_components/recruitment-priority-form';
import { db } from '@/configs/server/db';

export default async function DashboardParamsPage() {
  const recruitmentPriority = await db.recruitmentPriority.findFirst();

  return (
    <div className="flex w-full">
      <RecruitmentPriorityForm recruitmentPriority={recruitmentPriority} />
    </div>
  );
}
