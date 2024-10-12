'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormDescription } from '@/core/components/ui/form';
import { TextAreaForm } from '@/core/components/ui/textarea-form';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { updateRecruitmentPriorityAction } from '@/app/providence/_actions/update-recruitment-priority';
import type { RecruitmentPriority } from '@prisma/client';
import * as z from 'zod';

const formSchema = z.object({
  recruitmentPriority: z.string().optional(),
});

type Props = {
  recruitmentPriority: RecruitmentPriority | null;
};

export const RecruitmentPriorityForm = ({ recruitmentPriority }: Props) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recruitmentPriority: recruitmentPriority?.recruitmentPriority,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      await updateRecruitmentPriorityAction({
        recruitmentPriorityId: recruitmentPriority?.id,
        recruitmentPriority: values.recruitmentPriority ?? '',
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormDescription className="text-white">Définir la priorité de recrutement</FormDescription>
        <TextAreaForm control={form.control} name={'recruitmentPriority'} />
        <ButtonSubmit isPending={isPending}>{recruitmentPriority ? 'Editer' : 'Ajouter'}</ButtonSubmit>
      </form>
    </Form>
  );
};
