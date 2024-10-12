'use server';

import { db } from '@/configs/server/db';
import { adminAction, ServerActionError } from '@/configs/libs/next-safe-action';
import * as z from 'zod';
import { revalidatePath } from 'next/cache';

const actionSchema = z.object({
  recruitmentPriorityId: z.string().optional(),
  recruitmentPriority: z.string(),
});

export const updateRecruitmentPriorityAction = adminAction.schema(actionSchema).action(async ({ parsedInput }) => {
  try {
    if (parsedInput.recruitmentPriorityId) {
      await db.recruitmentPriority.upsert({
        where: {
          id: parsedInput.recruitmentPriorityId,
        },
        create: {
          id: parsedInput.recruitmentPriorityId,
          recruitmentPriority: parsedInput.recruitmentPriority,
        },
        update: {
          recruitmentPriority: parsedInput.recruitmentPriority,
        },
      });
    } else {
      await db.recruitmentPriority.create({
        data: {
          recruitmentPriority: parsedInput.recruitmentPriority,
        },
      });
    }
  } catch (error) {
    throw new ServerActionError('Error');
  }

  revalidatePath(`/providence/dashboard/settings`);
});
