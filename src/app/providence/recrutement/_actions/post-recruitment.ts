'use server';

import { actionClient, ServerActionError } from '@/configs/libs/next-safe-action';
import { db } from '@/configs/server/db';
import { ACTION_ERROR } from '@/configs/constants/error';
import { redirect } from 'next/navigation';
import { URL } from '@/configs/constants/url';
import { formSchema } from '@/app/providence/recrutement/_components/recruitment-schema';

export const postRecruitmentAction = actionClient.schema(formSchema).action(async ({ parsedInput }) => {
  try {
    await db.recruitment.create({
      data: {
        pseudo: parsedInput.pseudo,
        battleTag: parsedInput.battleTag,
        discord: parsedInput.discord,
        class: parsedInput.class,
        ilvl: parsedInput.ilvl,
        specialization: parsedInput.specialization,
        faction: parsedInput.faction,
        raiderIo: parsedInput.raiderIo,
        warcraftLogs: parsedInput.warcraftLogs,
        presentation: parsedInput.presentation,
        motivation: parsedInput.motivation,
      },
    });
  } catch (error) {
    throw new ServerActionError(ACTION_ERROR.POST_RECRUITMENT);
  }

  redirect(`${URL.RECRUTEMENT_CONFIRMATION}?pseudo=${parsedInput.pseudo}`);
});
