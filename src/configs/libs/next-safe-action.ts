import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from 'next-safe-action';
import { getServerAuthSession } from '@/configs/server/auth';

export class ServerActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    if (error instanceof ServerActionError) {
      return error.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const adminAction = createSafeActionClient({
  handleServerError: (error) => {
    if (error instanceof ServerActionError) {
      return error.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(async ({ next }) => {
  const session = await getServerAuthSession();

  if (session?.user.role !== 'ADMIN') {
    throw new ServerActionError('Unauthorized');
  }

  return next();
});
