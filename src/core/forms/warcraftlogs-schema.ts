import * as z from 'zod';

export const formSchema = z.object({
  url: z.string().url(),
});
