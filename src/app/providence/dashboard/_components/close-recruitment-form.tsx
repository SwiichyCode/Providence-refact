'use client';

import React, { useTransition } from 'react';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { updateRecruitmentAction } from '@/app/providence/_actions/update-recruitment';

type Props = {
  recruitmentId: string;
};

export const CloseRecruitmentForm = ({ recruitmentId }: Props) => {
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      await updateRecruitmentAction({
        recruitmentId,
        recruitmentStatus: 'CLOSED',
      });
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <ButtonSubmit isPending={isPending}>Closed</ButtonSubmit>
    </form>
  );
};
