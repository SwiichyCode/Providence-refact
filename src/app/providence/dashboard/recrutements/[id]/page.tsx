import { db } from '@/configs/server/db';
import Link from 'next/link';
import { CloseRecruitmentForm } from '@/app/providence/dashboard/_components/close-recruitment-form';
import { ArchivedRecruitmentForm } from '@/app/providence/dashboard/_components/archived-recruitment-form';
import { DeniedRecruitmentForm } from '@/app/providence/dashboard/_components/denied-recruitment-form';

type Props = {
  params: {
    id: string;
  };
};

export default async function RecruitmentInformationsPage({ params }: Props) {
  const recruitment = await db.recruitment.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!recruitment) {
    return <div>Recruitment not found</div>;
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <CloseRecruitmentForm recruitmentId={recruitment.id} />
        <ArchivedRecruitmentForm recruitmentId={recruitment.id} />
        <DeniedRecruitmentForm recruitmentId={recruitment.id} />
        <p>Status: {recruitment.status}</p>
        <p>Postulé le: {recruitment.postedAt.toISOString()}</p>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <p>Pseudo: {recruitment.pseudo}</p>
        <p>BattleTag: {recruitment.battleTag}</p>
        <p>Discord: {recruitment.discord}</p>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <p>Faction: {recruitment.faction}</p>
        <p>Class: {recruitment.class}</p>
        <p>Specialization: {recruitment.specialization}</p>
        <p>Ilvl: {recruitment.ilvl}</p>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <p>
          Raider.io:{' '}
          <Link href={recruitment.raiderIo} className="text-[#0581B2]" target="_blank">
            {recruitment.raiderIo}
          </Link>
        </p>
        <p>
          Warcraft Logs:{' '}
          <Link href={recruitment.warcraftLogs} className="text-[#0581B2]" target="_blank">
            {recruitment.warcraftLogs}
          </Link>
        </p>
      </div>
      <div className="space-y-8">
        <p>Presentation: {recruitment.presentation}</p>
        <p>Motivation: {recruitment.motivation}</p>
        <p>Disponibilités: {recruitment.days.map((day) => day).join(', ')}</p>
      </div>
    </section>
  );
}
