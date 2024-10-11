import Link from 'next/link';
import { Button } from '@/core/components/ui/button';

interface Props {
  searchParams: {
    pseudo: string;
  };
}

export default function RecrutementConfirmationPage({ searchParams }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-225px)] md:h-[calc(100vh-317px)]">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-4 space-y-4">
        <h1 className="text-3xl font-bold text-center">Merci pour votre candidature {searchParams.pseudo}</h1>
        <p className="mt-4 text-center">
          Votre candidature a bien été envoyée. Rejoins nous sur notre Discord pour prévenir un membre du staff dans le
          salon bienvenue.
        </p>
        <Button>
          <Link href="https://discord.gg/RG738gWp" target="_blank">
            Discord
          </Link>
        </Button>
      </div>
    </div>
  );
}
