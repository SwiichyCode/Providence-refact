import * as z from 'zod';

export const formSchema = z.object({
  pseudo: z.string().min(1),
  battleTag: z.string().min(1),
  discord: z.string().min(1),
  class: z.string().min(1),
  ilvl: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Expected number, received a string',
  }),
  specialization: z.string().min(1),
  faction: z.string().min(1),
  raiderIo: z.string().url(),
  warcraftLogs: z.string().url(),
  presentation: z.string().min(1),
  motivation: z.string().min(1),
  /*availability: z.string().min(1),*/

  days: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});
