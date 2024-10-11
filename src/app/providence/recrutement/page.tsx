'use client';

import { useState, useTransition, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputForm } from '@/core/components/ui/input-form';
import { Form } from '@/core/components/ui/form';
import { formSchema } from '@/app/providence/recrutement/_components/recruitment-schema';
import { SelectForm } from '@/core/components/ui/select-form';
import { TextAreaForm } from '@/core/components/ui/textarea-form';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { postRecruitmentAction } from '@/app/providence/_actions/post-recruitment';
import { CLASS } from '@/configs/constants/roster';
import type * as z from 'zod';

export type FormValues = z.infer<typeof formSchema>;

export default function RecrutementPage() {
  const [isPending, startTransition] = useTransition();
  const [currentClass, setCurrentClass] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pseudo: '',
      battleTag: '',
      class: '',
      ilvl: '',
      specialization: '',
      faction: '',
      raiderIo: '',
      warcraftLogs: '',
      presentation: '',
      motivation: '',
      availability: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const payload = await postRecruitmentAction(values);

      if (payload?.serverError) {
        setErrorMessage(payload.serverError);
        return;
      }

      form.reset();
    });
  }

  const watchClass = form.watch('class');

  useEffect(() => {
    setCurrentClass(form.watch('class'));
  }, [form, watchClass]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-20 sm:py-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold pb-12">Nous rejoindre</h1>
          <div className="space-y-12 text-lg">
            <p className="mb-6">
              Notre guilde est toujours à la recherche de nouveaux talents pour renforcer nos rangs et progresser
              ensemble. Que vous soyez un vétéran des raids ou un aventurier en pleine ascension, nous avons une place
              pour vous dans notre roster Héroïque et Mythique.
            </p>
            <p>
              Remplissez ce formulaire pour nous en dire plus sur vous, vos ambitions et votre expérience. Nous nous
              engageons à étudier chaque candidature avec soin et à vous répondre dans les plus brefs délais.
            </p>

            <div>
              <p>Recrutement prioritaire:</p>
              <ul className="list-disc">
                <li>DPS: DK / PRIEST</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-8">
          <div className="flex space-x-8">
            <InputForm control={form.control} name="pseudo" label="Pseudo" />

            <InputForm control={form.control} name="battleTag" label="BattleTag" />

            <InputForm control={form.control} name="discord" label="Discord" />
          </div>
          <div className={'flex w-full space-x-8'}>
            <SelectForm
              control={form.control}
              name="faction"
              placeholder="Alliance..."
              items={['Alliance', 'Horde']}
              label="Faction"
            />

            <SelectForm
              control={form.control}
              name="class"
              placeholder="Class..."
              items={CLASS.map((c) => c.value)}
              label="Class"
            />

            {currentClass && (
              <SelectForm
                control={form.control}
                name="specialization"
                placeholder="Specialization..."
                items={CLASS.find((c) => c.value === currentClass)?.specializations ?? []}
                label="Specialization"
              />
            )}

            <InputForm control={form.control} name="ilvl" label="Ilvl" type="number" />
          </div>
          <div className="flex w-full space-x-8">
            <InputForm control={form.control} name="raiderIo" label="Lien Raider.io" />
            <InputForm control={form.control} name="warcraftLogs" label="Lien Warcraft Logs" />
          </div>
          <div className={'flex w-full flex-col space-y-8'}>
            <TextAreaForm control={form.control} name="presentation" label="Présentez-vous" />
            <TextAreaForm control={form.control} name="motivation" label="Pourquoi nous rejoindre ?" />
            <TextAreaForm control={form.control} name="availability" label="Disponibilités (Lundi/Mardi ect..)" />
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <ButtonSubmit isPending={isPending}>Soumettre</ButtonSubmit>
        </div>
      </form>
    </Form>
  );
}
