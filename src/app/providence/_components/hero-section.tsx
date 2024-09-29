import Link from 'next/link';
import { Button } from '@/core/components/ui/button';
import { URL } from '@/configs/constants/url';

export const HeroSection = () => {
  return (
    <section className={'w-full flex flex-col gap-8 items-center text-center pt-32 max-w-[1080px] m-auto'}>
      <div className={'space-y-2'}>
        <h1 className={'text-4xl font-bold'}>Providence : Ensemble vers la victoire !</h1>
        <p className={'text-lg'}>La guilde où performance et convivialité se rencontrent</p>
      </div>

      <p className={'text-lg'}>
        Rejoignez-nous dans notre quête des plus grands défis de World of Warcraft. Que vous soyez un vétéran cherchant
        à repousser vos limites ou un joueur en pleine progression, Providence vous offre un environnement soudé et
        respectueux pour évoluer ensemble dans les contenus héroïques et mythiques.
      </p>

      <div className={'w-full justify-center'}>
        <Button className={'bg-[#0581B2]'}>
          <Link href={URL.RECRUTEMENT}>Rejoins-nous !</Link>
        </Button>
      </div>
    </section>
  );
};
