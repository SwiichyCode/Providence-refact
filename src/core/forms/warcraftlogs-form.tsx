'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/core/forms/warcraftlogs-schema';
import { Form } from '@/core/components/ui/form';
import { InputForm } from '@/core/components/ui/input-form';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { postWarcraftlogsAction } from '@/core/actions/post-warcraftlogs';
import type * as z from 'zod';

export type FormValues = z.infer<typeof formSchema>;

export const WarcraftlogsForm = () => {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const payload = await postWarcraftlogsAction({ url: values.url });

      if (payload?.serverError) {
        setErrorMessage(payload.serverError);
        return;
      }

      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-8 space-x-4 flex">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <InputForm control={form.control} name="url" label="Warcraftlogs URL" />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>

          <ButtonSubmit isPending={isPending}>Soumettre</ButtonSubmit>
        </div>
      </form>
    </Form>
  );
};
