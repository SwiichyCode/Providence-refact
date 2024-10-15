'use client';

import { useState, useTransition, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputForm } from '@/core/components/ui/input-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/core/components/ui/form';
import { formSchema } from '@/app/providence/recrutement/_components/recruitment-schema';
import { SelectForm } from '@/core/components/ui/select-form';
import { TextAreaForm } from '@/core/components/ui/textarea-form';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { postRecruitmentAction } from '@/app/providence/_actions/post-recruitment';
import { Checkbox } from '@/core/components/ui/checkbox';
import { CLASS } from '@/configs/constants/roster';
import type * as z from 'zod';

export type FormValues = z.infer<typeof formSchema>;

export const days = [
  {
    id: 'lundi',
    label: 'Lundi',
  },
  {
    id: 'mardi',
    label: 'Mardi',
  },
  {
    id: 'mercredi',
    label: 'Mercredi',
  },
  {
    id: 'jeudi',
    label: 'Jeudi',
  },
  {
    id: 'vendredi',
    label: 'Vendredi',
  },
  {
    id: 'samedi',
    label: 'Samedi',
  },
  {
    id: 'dimanche',
    label: 'Dimanche',
  },
] as const;

export default function RecruitmentForm() {
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
      days: [],
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <div className="flex w-full flex-col space-y-8">
            <TextAreaForm control={form.control} name="presentation" label="Présentez-vous" />
            <TextAreaForm control={form.control} name="motivation" label="Pourquoi nous rejoindre ?" />
            {/*<TextAreaForm control={form.control} name="availability" label="Disponibilités (Lundi/Mardi ect..)" />*/}

            <FormField
              control={form.control}
              name="days"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Disponibilités</FormLabel>
                    <FormDescription>
                      Veuillez sélectionner les jours où vous êtes disponible pour raider.
                    </FormDescription>
                  </div>
                  {days.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="days"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={Array.isArray(field.value) && field.value.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  if (Array.isArray(field.value)) {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(field.value.filter((value) => value !== item.id));
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <ButtonSubmit isPending={isPending}>Soumettre</ButtonSubmit>
        </div>
      </form>
    </Form>
  );
}
