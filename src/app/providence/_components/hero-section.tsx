import Link from 'next/link';
import { Button } from '@/core/components/ui/button';
import { URL } from '@/configs/constants/url';

export const HeroSection = () => {
  return (
    <section className="w-full flex flex-col gap-8 items-center text-center py-20 sm:py-28 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Providence : Ensemble vers la victoire !</h1>
        <p className="text-lg">La guilde où performance et convivialité se rencontrent 7/8HM</p>
      </div>

      <p className="text-lg">
        Rejoignez-nous dans notre quête des plus grands défis de World of Warcraft. Que vous soyez un vétéran cherchant
        à repousser vos limites ou un joueur en pleine progression, Providence vous offre un environnement soudé et
        respectueux pour évoluer ensemble dans les contenus héroïques et mythiques.
      </p>

      <div className="w-full justify-center">
        <Button>
          <Link href={URL.RECRUTEMENT}>Rejoins-nous !</Link>
        </Button>
      </div>
    </section>
  );
};
