import {
  TrophyIcon,
  UsersIcon,
  CalendarIcon,
  PresentationChartLineIcon,
  ClipboardIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Progression PvE compétitive',
    description:
      'Nous visons le clean du contenu Héroïque et un avancement solide en Mythique. Nos raids sont organisés avec rigueur, pour que chacun puisse donner le meilleur de soi-même.',
    icon: TrophyIcon,
  },
  {
    name: 'Entraide et bonne ambiance',
    description:
      "Chez Providence, l'ambiance de guilde est primordiale. Nous croyons en la force du collectif et en l'entraide. Chaque membre est encouragé à s'améliorer, à demander et partager des conseils.",
    icon: UsersIcon,
  },
  {
    name: 'Activités variées : Mythique+, Raids & plus',
    description:
      'En dehors des raids, nous organisons régulièrement des sorties en Mythique+, pour farmer du gear, optimiser nos performances et améliorer notre coordination en groupe.',
    icon: CalendarIcon,
  },
  {
    name: 'Planning de raid adapté à tous',
    description:
      'Nous raiderons deux fois par semaine (Mercredi & Dimanche de 21h à 00h), un équilibre parfait pour concilier performance et vie IRL, sans pression excessive.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Un système de loot transparent',
    description:
      "Nous utilisons l’addon RCLootCouncil pour garantir une distribution de loots claire et juste, favorisant la progression de l'ensemble du groupe.",
    icon: ClipboardIcon,
  },
];

export const FeaturesSection = () => {
  return (
    <div className="py-20 sm:py-28 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold leading-9 sm:leading-7">Pourquoi choisir Providence ?</h2>
          <p className="text-lg">Une guilde à votre image, orientée vers la progression et la cohésion</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0581B2]">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
