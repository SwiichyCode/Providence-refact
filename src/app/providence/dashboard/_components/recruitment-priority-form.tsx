'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormDescription } from '@/core/components/ui/form';
import { TextAreaForm } from '@/core/components/ui/textarea-form';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import * as z from 'zod';
import { updateRecruitmentPriorityAction } from '@/app/providence/_actions/update-recruitment-priority';

const formSchema = z.object({
  recruitmentPriority: z.string(),
});

export const RecruitmentPriorityForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recruitmentPriority: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      await updateRecruitmentPriorityAction({
        recruitmentPriorityId: '1',
        recruitmentPriority: values.recruitmentPriority,
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormDescription className="text-white">Définir la priorité de recrutement</FormDescription>
        <TextAreaForm control={form.control} name={'recruitmentPriority'} />
        <ButtonSubmit isPending={isPending}>Confirmer</ButtonSubmit>
      </form>
    </Form>
  );
};
