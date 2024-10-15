'use server';
import * as z from 'zod';
import { adminAction, ServerActionError } from '@/configs/libs/next-safe-action';
import { db } from '@/configs/server/db';

const actionSchema = z.object({
  url: z.string(),
});

export const postWarcraftlogsAction = adminAction.schema(actionSchema).action(async ({ parsedInput }) => {
  try {
    await db.warcraftLog.create({
      data: {
        url: parsedInput.url,
      },
    });
  } catch (error) {
    throw new ServerActionError('Error');
  }
});
