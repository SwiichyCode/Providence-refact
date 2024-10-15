'use client';

import React, { useTransition } from 'react';
import { ButtonSubmit } from '@/core/components/ui/button-submit';
import { updateRecruitmentAction } from '@/core/actions/update-recruitment';

type Props = {
  recruitmentId: string;
};

export const ArchivedRecruitmentForm = ({ recruitmentId }: Props) => {
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      await updateRecruitmentAction({
        recruitmentId,
        recruitmentStatus: 'ARCHIVED',
      });
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <ButtonSubmit isPending={isPending}>Archived</ButtonSubmit>
    </form>
  );
};
