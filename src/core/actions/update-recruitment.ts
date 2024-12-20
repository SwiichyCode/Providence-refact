'use server';

import { db } from '@/configs/server/db';
import { adminAction, ServerActionError } from '@/configs/libs/next-safe-action';
import { redirect } from 'next/navigation';
import * as z from 'zod';

const actionSchema = z.object({
  recruitmentId: z.string(),
  recruitmentStatus: z.enum(['OPEN', 'CLOSED', 'DENIED', 'ARCHIVED']),
});

export const updateRecruitmentAction = adminAction.schema(actionSchema).action(async ({ parsedInput }) => {
  try {
    await db.recruitment.update({
      where: {
        id: parsedInput.recruitmentId,
      },
      data: {
        status: parsedInput.recruitmentStatus,
      },
    });
  } catch (error) {
    throw new ServerActionError('Error');
  }

  redirect(`/providence/dashboard/recrutements/${parsedInput.recruitmentStatus.toLowerCase()}`);
});
