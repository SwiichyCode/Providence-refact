interface Props {
  recruitmentPriority?: string;
}

export const RecruitmentDescription = ({ recruitmentPriority }: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-12">Nous rejoindre</h1>
      <div className="space-y-12 text-lg">
        <p className="mb-6">
          Notre guilde est toujours à la recherche de nouveaux talents pour renforcer nos rangs et progresser ensemble.
          Que vous soyez un vétéran des raids ou un aventurier en pleine ascension, nous avons une place pour vous dans
          notre roster Héroïque et Mythique.
        </p>
        <p>
          Remplissez ce formulaire pour nous en dire plus sur vous, vos ambitions et votre expérience. Nous nous
          engageons à étudier chaque candidature avec soin et à vous répondre dans les plus brefs délais.
        </p>

        <div>
          <p>Recrutement prioritaire</p>
          <p>Roster 1: {recruitmentPriority}</p>
        </div>
      </div>
    </div>
  );
};
